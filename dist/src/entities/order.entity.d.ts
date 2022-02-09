import { Invoice } from './invoice.entity';
import { OrderItem } from './order_item.entity';
import { Product } from './product.entity';
import { User } from './user.entity';
export declare class Order {
    id: number;
    total: number;
    delivery_date: Date;
    note: string;
    phone_number: string;
    name_receiver: string;
    statusName: string;
    city: string;
    district: string;
    ward: string;
    address: string;
    orderItems: OrderItem[];
    invoice: Invoice[];
    user: User;
    product: Product;
    created_at: Date;
    updated_at: Date;
    quantity: number;
    price: number;
}
