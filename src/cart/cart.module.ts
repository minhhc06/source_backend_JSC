import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { CartController } from './cart.controller';
import { CartRepository } from './cart.repository';
import { CartService } from './cart.service';

@Module({
  imports: [ TypeOrmModule.forFeature([ CartRepository, Product ])],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
