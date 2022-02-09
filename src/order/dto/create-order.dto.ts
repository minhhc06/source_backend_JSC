import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, MinLength, ValidateNested } from "class-validator";

export enum StatusOrderItem {
    PROCESSING = 'processing',
    ONDELIVERING = 'onDelivering',
    PAYOFF = 'payOff',
    FAILED = 'failed',
}


export enum StatusOrder {
    PROCESSING = 'processing',
    ONDELIVERING = 'onDelivering',
    SUCCESS = 'success',
    PAYOFF = 'payOff',
    FAILED = 'failed',
}


export class OrderItemDto {
    @ApiProperty()
    @IsNumber()
    productId: number;
    @ApiProperty()
    @IsNumber()
    quantity: number;
    @ApiProperty()
    @IsNumber()
    price: number;
    @ApiProperty()
    @IsNumber()
    total: number;
}

export class CreateOrderDto{


    @ApiProperty()
    deliveryDate: Date;
    @ApiProperty()
    note: string;
    @ApiProperty()
    @IsNotEmpty()
    phoneNumber: string;
    @ApiProperty()
    @IsNotEmpty()
    nameReceiver: string;
    @ApiProperty()
    @IsNotEmpty()
    statusName: StatusOrder;
    @ApiProperty()
    @IsNotEmpty()
    city: string;

    @ApiProperty()
    @IsNotEmpty()
    district: string;
    @ApiProperty()
    @IsNotEmpty()
    ward: string;
    @ApiProperty()
    @IsNotEmpty()
    address: string;
    @ApiProperty()
    @ValidateNested({each: true})
    @Type(() => {return OrderItemDto})
    @IsArray()
    orderItems: OrderItemDto[];
    
}