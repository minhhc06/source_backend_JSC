import { Body, Controller, Delete, Get, Param, Patch, Post, Query,  UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { serialize, deserialize } from 'class-transformer';
import { Discount } from 'src/entities/discount.entity';
import { DiscountService } from './discount.service';
import { DiscountDto } from './dto/discount.dto';

@Controller('discount')
@UseGuards(AuthGuard())
export class DiscountController {
    constructor(private discountService: DiscountService) {}
   @Get()
     async getDiscount() {
      const discountModel = serialize(await this.discountService.getDiscount());
      return {
        status: 200,
        message: 'ok',
        data: deserialize(Discount, discountModel)
      };
    }

    @Post()
    createDiscount(@Body() discountDto: DiscountDto) : Promise<Discount>{
      console.log(discountDto);
      return this.discountService.createDiscount(discountDto);
  
    }

}