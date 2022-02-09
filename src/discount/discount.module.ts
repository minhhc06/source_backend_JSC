import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { DiscountController } from './discount.controller';

import { DiscountRepository } from './discount.repository';
import { DiscountService } from './discount.service';


@Module({
    imports: [ TypeOrmModule.forFeature([ DiscountRepository ]),
    AuthModule
],
    controllers: [DiscountController],
    providers: [DiscountService],
})


export class DiscountModule {}