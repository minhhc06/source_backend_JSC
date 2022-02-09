import {
  Injectable,
  NotFoundException,
  UploadedFile,
  InternalServerErrorException,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { ProductImageRepository } from './product-images.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { Repository } from 'typeorm';
import { Discount } from 'src/entities/discount.entity';
import { ProductImage } from 'src/entities/product_image.entity';
import { UploadImageDto } from './dto/upload-image.dto';
import { PaginationDto } from './dto/get-product.dto';
import { ProductCategory } from 'src/entities/product_category.entity';
import { FetchProductsDto } from './dto/fetch-products.dto';
import { DetailProductDto } from './dto/detail-product.dto';
import { ProductRepository } from './product.repository';
import axios from 'axios';
import * as FormData from 'form-data';
import { Duplex } from 'stream';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Discount)
    private discountRepository: Repository<Discount>,
    @InjectRepository(ProductCategory)
    private productCategory: Repository<ProductCategory>,
    @InjectRepository(ProductImageRepository)
    private productImage: ProductImageRepository,
    @InjectRepository(ProductRepository)
    private product: ProductRepository,
  ) {}
  async getProduct(fetchProductsDto: FetchProductsDto): Promise<Product[]> {
    try {
      // const query = this.createQueryBuilder('product').innerJoinAndSelect('product.id', );
      const {
        page = 1,
        limit = 20,
        categoryId,
        searchString,
      } = fetchProductsDto;
      const query = this.productRepository
        .createQueryBuilder('product')
        .select([
          'product.id',
          'product.name',
          'product.price',
          'product.quantity',
        ])
        .leftJoinAndSelect('product.discounts', 'discount')
        .leftJoinAndSelect('product.productImages', 'productImage')
        .addSelect([
          'productImage.id',
          'productImage.url',
          'discount.discount',
          'discount.name_discount',
        ])
        .orderBy('product.id', 'DESC');
      if (categoryId) {
        query.innerJoinAndSelect(
          'product.productCategory',
          'productCategory',
          'product.productCategoryId = :categoryId',
          { categoryId },
        );
      }
      if (searchString) {
        query.where('product.name like :searchString', {
          searchString: `%${searchString}%`,
        });
      }
      const product = await query
        .limit(limit)
        .offset(limit * (page - 1))
        .getMany();
      return product;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async getDetailProduct(id: number): Promise<any> {
    // const productResult = this.product.detailProductRepository(id);
    const query = this.productRepository
      .createQueryBuilder('product')
      .select([
        'product.id',
        'product.name',
        'product.price',
        'product.about',
        'product.brand',
        'product.material',
        'product.made_in',
        'product.expiry',
        'product.preserve',
        'product.type_skin',
      ])
      .leftJoinAndSelect('product.discounts', 'discount')
      .leftJoinAndMapMany(
        'product.productImages',
        ProductImage,
        'productImage',
        'product.id = productImage.productId',
      )
      .addSelect([
        'productImage.id',
        'productImage.url',
        'discount.discount',
        'discount.name_discount',
      ])
      .where('product.id = :id', { id: id })
      .getOne();

    return query;
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const {
      name,
      category,
      price,
      quantity,
      about,
      brand,
      material,
      made_in,
      expiry,
      preserve,
      type_skin,
      discount,
      name_discount,
    } = createProductDto;

    const foundCategory = await this.productCategory.findOne({
      where: { id: category },
    });
    if (!foundCategory) {
      throw new BadRequestException('Category not found');
    }
    const productModel = this.productRepository.create({
      name,
      productCategory: foundCategory,
      price,
      quantity,
      about,
      brand,
      material,
      made_in,
      expiry,
      preserve,
      type_skin,
    });

    const products = await this.productRepository.save(productModel);

    if(discount){
      let newDiscount = this.discountRepository.create({
        discount,
        name_discount,
        id_product: productModel.id,
        product: products,
      });
  
      newDiscount = await this.discountRepository.save(newDiscount);
    }
    
    return productModel;
  }
  async bufferToStream(buffer) {
    const duplexStream = new Duplex();
    duplexStream.push(buffer);
    duplexStream.push(null);
    return duplexStream;
  }

  async uploadImageService(
    uploadImageDto: UploadImageDto,
    file,
  ): Promise<ProductImage> {
    const productResult = await this.productRepository.findOne({
      id: uploadImageDto.idProduct,
    });
    const formData = new FormData();
    formData.append(
      'image',
      await this.bufferToStream(file.buffer),
      file.originalname,
    );
    const { data } = await axios.post(
      process.env.BASE_URL + '/storage/products',
      formData,
      {
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
        },
      },
    );
    console.log(data);
    if (productResult) {
      return this.productImage.uploadImage(data, productResult);
    } else {
      throw new UnauthorizedException('Wrong id product upload file');
    }
  }

  async removeProductImage(productId) {
    if (!productId) {
      throw new BadRequestException('productId is required');
    }
    const foundProduct = await this.product.findOne(productId, {
      relations: ['productImages'],
    });
    const productImgs = foundProduct.productImages.map((t) => t.id);
    await this.productImage.delete(productImgs);
    return { success: true, msg: 'image have been successfully deleted' };
  }
}
