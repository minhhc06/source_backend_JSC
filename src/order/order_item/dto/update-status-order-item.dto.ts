import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional } from "class-validator";
import { StatusOrder } from "src/order/dto/create-order.dto";
import { PaginationDto } from "src/product/dto/get-product.dto";

export class UpdateStatusOrderItemDto {
    @ApiProperty()
    idOrderItem: number;

    @ApiProperty()
    idOrder: number;

    @ApiProperty()
    @IsEnum(StatusOrder)
    status: StatusOrder;
  }