import { Product } from './product.entity';
export declare class ProductCategory {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
    product: Product[];
}
