import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { StatusOrder } from "./create-order.dto";

export class UpdateStatusDto{
    @ApiProperty()
    @IsNotEmpty()
    idOrder: number;
    @ApiProperty()
    @IsNotEmpty()
    statusName: StatusOrder;
}