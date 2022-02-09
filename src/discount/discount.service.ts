import { Injectable, NotFoundException, UploadedFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Discount } from 'src/entities/discount.entity';
import { Product } from 'src/entities/product.entity';
import { DiscountRepository } from './discount.repository';
import { DiscountDto } from './dto/discount.dto';

@Injectable()
export class DiscountService  {
    constructor(
        @InjectRepository(DiscountRepository) 
        private discountRepository: DiscountRepository,
    ){}

    getDiscount(): Promise<Discount[]>{
        return this.discountRepository.getDiscount();
    }

    createDiscount(creatDiscountDto: DiscountDto) : Promise<Discount> {
    
        return this.discountRepository.createDiscount(creatDiscountDto);
    
    }

}