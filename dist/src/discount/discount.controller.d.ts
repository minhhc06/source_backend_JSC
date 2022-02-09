import { Discount } from 'src/entities/discount.entity';
import { DiscountService } from './discount.service';
import { DiscountDto } from './dto/discount.dto';
export declare class DiscountController {
    private discountService;
    constructor(discountService: DiscountService);
    getDiscount(): Promise<{
        status: number;
        message: string;
        data: Discount;
    }>;
    createDiscount(discountDto: DiscountDto): Promise<Discount>;
}
