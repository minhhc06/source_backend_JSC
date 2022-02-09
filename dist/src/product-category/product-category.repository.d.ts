import { ProductCategory } from "src/entities/product_category.entity";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { CreateProductCategoryDto } from "./dto/create-product-category.dto";
export declare class ProductCategoryRepository extends Repository<ProductCategory> {
    createProductCategory(user: User, createProductCategoryDto: CreateProductCategoryDto): Promise<ProductCategory>;
    getProductCategory(): Promise<ProductCategory[]>;
}
