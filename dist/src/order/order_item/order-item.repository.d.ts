import { Order } from "src/entities/order.entity";
import { OrderItem } from "src/entities/order_item.entity";
import { Product } from "src/entities/product.entity";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { OrderItemDto } from "../dto/create-order.dto";
import { FetchOrderItem } from "./dto/fetch-order-item.dto";
import { UpdateStatusOrderItemDto } from "./dto/update-status-order-item.dto";
export declare class OrderItemRepository extends Repository<OrderItem> {
    createOrderItem(order: Order, product: Product, dto: OrderItemDto, user: User): Promise<OrderItem>;
    deleteOrderItems(user: User, product: Product): Promise<any>;
    updateStatusOrderItem(updateStatusOrderItemDto: UpdateStatusOrderItemDto): Promise<string>;
    fetchHistoryOrder(fetchOrderItem: FetchOrderItem, userId: number): Promise<any>;
}
