import { ProductCategory } from 'src/entities/product_category.entity';
import { User } from 'src/entities/user.entity';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { ProductCategoryService } from './product-category.service';
export declare class ProductCategoryController {
    private productCategoryService;
    constructor(productCategoryService: ProductCategoryService);
    getProductCategories(): Promise<{
        status: number;
        message: string;
        data: any;
    }>;
    createProduct(user: User, createProductCategoryDto: CreateProductCategoryDto): Promise<ProductCategory>;
}
