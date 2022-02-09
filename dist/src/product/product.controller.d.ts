import { ProductService } from './product.service';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import * as multer from 'multer';
import { UploadImageDto } from './dto/upload-image.dto';
import { ProductImage } from 'src/entities/product_image.entity';
import { FetchProductsDto } from './dto/fetch-products.dto';
export declare const storage: {
    storage: multer.StorageEngine;
    limits: {
        fileSize: number;
    };
};
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getProduct(fetchProductsDto: FetchProductsDto): Promise<{
        status: number;
        message: string;
        data: Product[];
        page: number;
        limit: number;
        totalRecords: number;
    }>;
    fetchDetailProduct(param: any): Promise<{
        status: number;
        message: string;
        data: any;
    }>;
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    removeProductImage(productId: number): Promise<{
        success: boolean;
        msg: string;
    }>;
    createTask(uploadImageDto: UploadImageDto, image: any): Promise<ProductImage>;
}
