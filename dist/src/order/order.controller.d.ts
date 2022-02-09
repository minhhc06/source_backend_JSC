import { Order } from "src/entities/order.entity";
import { User } from "src/entities/user.entity";
import { GetOrderDto } from "src/product/dto/get-product.dto";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateStatusDto } from "./dto/update-status-order.dto";
import { OrderService } from "./order.service";
import { FetchOrderItem } from "./order_item/dto/fetch-order-item.dto";
import { UpdateStatusOrderItemDto } from "./order_item/dto/update-status-order-item.dto";
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    getOrder(user: User, paginationDto: GetOrderDto): Promise<{
        status: number;
        message: string;
        data: Order[];
    }>;
    createProduct(user: User, createOrderDto: CreateOrderDto): Promise<Order>;
    updateStatusOrder(user: User, updateStatusDto: UpdateStatusDto): Promise<any>;
    fetchOrderItem(user: User, fetchOrderItem: FetchOrderItem): Promise<any>;
    updateStatusOrderItem(user: User, updateStatusOrderItemDto: UpdateStatusOrderItemDto): Promise<any>;
}
