import { Product } from 'src/entities/product.entity';
import { EntityRepository, Repository } from 'typeorm';
import {
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  UnauthorizedException,
  UploadedFile,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Discount } from 'src/entities/discount.entity';
import { UploadImageDto } from './dto/upload-image.dto';
import { ProductImage } from 'src/entities/product_image.entity';

@EntityRepository(ProductImage)
export class ProductImageRepository extends Repository<ProductImage> {
  // constructor(private discountRepository: Repository<Discount>,
  //   private productImg: Repository<ProductImage>){
  // // constructor(private product: Repository<Product>){
  //     super();  }

  async uploadImage(image, product: Product): Promise<ProductImage> {
    const productImg = this.create({
      product: product,
      url: image.file,
    });
    console.log(productImg);

    try {
      return await this.save(productImg);
    } catch (error) {
      console.log(error.code);
      if (error.message.includes('Error'))
        throw new HttpException('Fail!', HttpStatus.BAD_REQUEST);
    }
  }
}
