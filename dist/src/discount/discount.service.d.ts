import { Discount } from 'src/entities/discount.entity';
import { DiscountRepository } from './discount.repository';
import { DiscountDto } from './dto/discount.dto';
export declare class DiscountService {
    private discountRepository;
    constructor(discountRepository: DiscountRepository);
    getDiscount(): Promise<Discount[]>;
    createDiscount(creatDiscountDto: DiscountDto): Promise<Discount>;
}
