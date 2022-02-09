import { UsersRepository } from 'src/auth/users.repository';
import { CartRepository } from 'src/cart/cart.repository';
import { Order } from 'src/entities/order.entity';
import { Product } from 'src/entities/product.entity';
import { User } from 'src/entities/user.entity';
import { GetOrderDto } from 'src/product/dto/get-product.dto';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateStatusDto } from './dto/update-status-order.dto';
import { InvoiceRepository } from './invoice/invoice_repository';
import { OrderRepository } from './order.repository';
import { FetchOrderItem } from './order_item/dto/fetch-order-item.dto';
import { UpdateStatusOrderItemDto } from './order_item/dto/update-status-order-item.dto';
import { OrderItemRepository } from './order_item/order-item.repository';
export declare class OrderService {
    private orderRepository;
    private orderItemRepository;
    private invoiceRepository;
    private productRepository;
    private cartRepository;
    private userRepository;
    constructor(orderRepository: OrderRepository, orderItemRepository: OrderItemRepository, invoiceRepository: InvoiceRepository, productRepository: Repository<Product>, cartRepository: CartRepository, userRepository: UsersRepository);
    createOrder(user: User, createOrderDto: CreateOrderDto): Promise<any>;
    updateStatusOrder(user: User, updateStatusDto: UpdateStatusDto): Promise<any>;
    fetchOrderItem(fetchOrderItem: FetchOrderItem, user: User): Promise<any>;
    updateStatusOrderItem(user: User, updateStatusOrderItemDto: UpdateStatusOrderItemDto): Promise<any>;
    getOrders(paginationDto: GetOrderDto, userDto: User): Promise<Order[]>;
}
