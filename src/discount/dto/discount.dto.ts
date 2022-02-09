import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class DiscountDto{
    @ApiProperty()
    @IsNotEmpty()
    id_product: number;
    @ApiProperty()
    @IsNotEmpty()
    discount: number;
    @ApiProperty()
    name_discount: string;

}