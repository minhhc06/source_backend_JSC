import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryController } from './product-category.controller';
import { ProductCategoryRepository } from './product-category.repository';
import { ProductCategoryService } from './product-category.service';

@Module({
  imports: [ TypeOrmModule.forFeature([ ProductCategoryRepository ])],
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService]
})
export class ProductCategoryModule {}
