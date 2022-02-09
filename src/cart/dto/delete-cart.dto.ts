import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class DeleteCartDto{
    @ApiProperty()
    @IsNotEmpty()
    id: number;

}