import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from 'src/auth/users.repository';
import { CartRepository } from 'src/cart/cart.repository';
import { Product } from 'src/entities/product.entity';
import { User } from 'src/entities/user.entity';
import { OrderItemDto } from './dto/create-order.dto';
import { InvoiceRepository } from './invoice/invoice_repository';
import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { OrderService } from './order.service';
import { OrderItemRepository } from './order_item/order-item.repository';

@Module({
    imports: [ TypeOrmModule.forFeature([ OrderRepository, OrderItemRepository, InvoiceRepository,Product, CartRepository, UsersRepository ])],
    controllers: [OrderController],
    providers: [OrderService],
})
export class OrderModule {
    
}
