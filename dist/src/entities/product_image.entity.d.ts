import { Product } from './product.entity';
export declare class ProductImage {
    id: number;
    url: string;
    created_at: Date;
    updated_at: Date;
    product: Product;
}
