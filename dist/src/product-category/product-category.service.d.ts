import { User } from 'src/entities/user.entity';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { ProductCategoryRepository } from './product-category.repository';
export declare class ProductCategoryService {
    private cartRepository;
    constructor(cartRepository: ProductCategoryRepository);
    createProductCategory(user: User, createProductCategoryDto: CreateProductCategoryDto): Promise<any>;
    getProductCategory(): Promise<any>;
}
