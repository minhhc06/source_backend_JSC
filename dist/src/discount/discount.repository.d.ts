import { Repository } from 'typeorm';
import { Discount } from 'src/entities/discount.entity';
import { DiscountDto } from './dto/discount.dto';
export declare class DiscountRepository extends Repository<Discount> {
    getDiscount(): Promise<Discount[]>;
    createDiscount(discountDto: DiscountDto): Promise<Discount>;
}
