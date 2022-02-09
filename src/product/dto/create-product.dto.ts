import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateProductDto{
    @ApiProperty()
    @IsNotEmpty()
    name: string;
    
    @ApiProperty()
    @IsNotEmpty()
    price: number;
    @ApiProperty()
    @IsNotEmpty()
    quantity: number;
    @ApiProperty()
    about: string;
    @ApiProperty()
    brand: string;
    @ApiProperty()
    material: string;
    @ApiProperty()
    made_in: string;
    @ApiProperty()
    @IsNotEmpty()
    expiry: Date;
    @ApiProperty()
    preserve: string;
    @ApiProperty()
    type_skin: string;
    @ApiProperty()
    discount: number;
    @ApiProperty()
    name_discount: string;

    @ApiProperty()
    @IsNotEmpty()
    category: number;
}