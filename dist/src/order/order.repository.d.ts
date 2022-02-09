import { Order } from "src/entities/order.entity";
import { Product } from "src/entities/product.entity";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { CreateOrderDto, OrderItemDto } from "./dto/create-order.dto";
export declare class OrderRepository extends Repository<Order> {
    createOrder(user: User, createOrderDto: CreateOrderDto, orderItem: OrderItemDto, product: Product): Promise<Order>;
    updateStatusOrder(id: number, statusName: string): Promise<any>;
    fetchOrderList(id: number): Promise<Order>;
}
