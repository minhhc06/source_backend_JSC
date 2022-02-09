import { Product } from './product.entity';
import { User } from './user.entity';
export declare class Cart {
    id: number;
    quantity: number;
    product: Product;
    user: User;
    created_at: Date;
    updated_at: Date;
}
