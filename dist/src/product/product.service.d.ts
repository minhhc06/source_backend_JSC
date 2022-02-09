/// <reference types="node" />
import { Product } from 'src/entities/product.entity';
import { ProductImageRepository } from './product-images.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { Repository } from 'typeorm';
import { Discount } from 'src/entities/discount.entity';
import { ProductImage } from 'src/entities/product_image.entity';
import { UploadImageDto } from './dto/upload-image.dto';
import { ProductCategory } from 'src/entities/product_category.entity';
import { FetchProductsDto } from './dto/fetch-products.dto';
import { ProductRepository } from './product.repository';
import { Duplex } from 'stream';
export declare class ProductService {
    private productRepository;
    private discountRepository;
    private productCategory;
    private productImage;
    private product;
    constructor(productRepository: Repository<Product>, discountRepository: Repository<Discount>, productCategory: Repository<ProductCategory>, productImage: ProductImageRepository, product: ProductRepository);
    getProduct(fetchProductsDto: FetchProductsDto): Promise<Product[]>;
    getDetailProduct(id: number): Promise<any>;
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    bufferToStream(buffer: any): Promise<Duplex>;
    uploadImageService(uploadImageDto: UploadImageDto, file: any): Promise<ProductImage>;
    removeProductImage(productId: any): Promise<{
        success: boolean;
        msg: string;
    }>;
}
