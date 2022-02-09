import { Product } from './product.entity';
export declare class Discount {
    id: number;
    id_product: number;
    discount: number;
    name_discount: string;
    created_at: Date;
    updated_at: Date;
    product: Product;
}
