import { Order } from './order.entity';
export declare class Invoice {
    id: number;
    status_name: string;
    created_at: Date;
    updated_at: Date;
    order: Order;
}
