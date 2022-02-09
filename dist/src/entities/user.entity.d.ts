import { Cart } from './cart.entity';
import { HistoryCoin } from './history_coin.entity';
import { Order } from './order.entity';
import { OrderItem } from './order_item.entity';
export declare class User {
    id: number;
    fullname: string;
    username: string;
    password: string;
    email: string;
    city: string;
    district: string;
    ward: string;
    address: string;
    avatar: string;
    created_at: Date;
    updated_at: Date;
    coin: number;
    histories: HistoryCoin[];
    order: Order[];
    cart: Cart[];
    orderItem: OrderItem[];
}
