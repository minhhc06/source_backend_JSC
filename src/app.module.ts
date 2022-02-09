import { Module } from '@nestjs/common';

import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { DiscountModule } from './discount/discount.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { CartModule } from './cart/cart.module';
import { ProductCategoryModule } from './product-category/product-category.module';



@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        });
      },
    }),
     ProductModule,
      DiscountModule,
      AuthModule,
      OrderModule,
      CartModule,
      ProductCategoryModule
    ],
  
})
export class AppModule {}
