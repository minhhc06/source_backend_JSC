import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';
import { ProductImage } from 'src/entities/product_image.entity';
export declare class ProductImageRepository extends Repository<ProductImage> {
    uploadImage(image: any, product: Product): Promise<ProductImage>;
}
