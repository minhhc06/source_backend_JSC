import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { ProductCategoryRepository } from './product-category.repository';

@Injectable()
export class ProductCategoryService {
    constructor(
        @InjectRepository(ProductCategoryRepository)
        private cartRepository: ProductCategoryRepository,
    ){}

    async createProductCategory(
        user: User,
        createProductCategoryDto: CreateProductCategoryDto,
      ): Promise<any> {
            const order = await this.cartRepository.createProductCategory(user, createProductCategoryDto);
    
        return 'success';
      }

      async getProductCategory(): Promise<any> {
            const categories = await this.cartRepository.getProductCategory();
    
        return categories;
      }

}
