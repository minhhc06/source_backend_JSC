import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UploadImageDto{
    @ApiProperty()
    @IsNotEmpty()
    idProduct: number;
    @ApiProperty()
    image_name: string;

}