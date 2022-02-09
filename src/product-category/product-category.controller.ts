import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { ProductCategory } from 'src/entities/product_category.entity';
import { User } from 'src/entities/user.entity';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { ProductCategoryService } from './product-category.service';

@Controller('product-category')
export class ProductCategoryController {
    constructor(private productCategoryService: ProductCategoryService) {}

    @Get('/get-product-categories')
    async getProductCategories() {
      const categories = await this.productCategoryService.getProductCategory();
      return {
        status: 200,
        message: 'success',
        data: categories,
      };
    }


    @Post()
    @UseGuards(AuthGuard('jwt'))
    createProduct(@GetUser() user: User, @Body() createProductCategoryDto: CreateProductCategoryDto): Promise<ProductCategory> {
      
      return this.productCategoryService.createProductCategory(user, createProductCategoryDto);
    }
}
