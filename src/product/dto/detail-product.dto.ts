import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class DetailProductDto{
    @ApiProperty()
    @IsNotEmpty()
    id: number;
}