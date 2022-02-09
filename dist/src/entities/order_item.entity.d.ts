import { StatusOrder } from 'src/order/dto/create-order.dto';
import { Order } from './order.entity';
import { Product } from './product.entity';
import { User } from './user.entity';
export declare class OrderItem {
    id: number;
    quantity: number;
    total: number;
    statusName: StatusOrder;
    reason_fail: string;
    order: Order;
    created_at: Date;
    updated_at: Date;
    product: Product;
    user: User;
}
