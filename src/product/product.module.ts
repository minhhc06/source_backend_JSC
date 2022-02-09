import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductImageRepository } from './product-images.repository';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Discount } from 'src/entities/discount.entity';
import { Product } from 'src/entities/product.entity';
import { ProductCategory } from 'src/entities/product_category.entity';
import { ProductRepository } from './product.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Discount,
      Product,
      ProductImageRepository,
      ProductCategory,
      ProductRepository,
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
