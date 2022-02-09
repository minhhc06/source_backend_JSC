import { Product } from "src/entities/product.entity";
import { Repository } from "typeorm";
export declare class ProductRepository extends Repository<Product> {
    detailProductRepository(id: number): Promise<Product>;
}
