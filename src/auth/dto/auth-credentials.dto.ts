import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto{
    @ApiProperty()
    fullname: string;
    @ApiProperty()
    @IsString()
    @MinLength(4)
    // @MaxLength(20)
    username: string;
    @ApiProperty()
    @IsString()
    @MinLength(4)
    // @MaxLength(32)
    @ApiProperty()
    password: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    city: string;
    @ApiProperty()
    district: string;
    @ApiProperty()
    ward: string;
    @ApiProperty()
    address: string;
    @ApiProperty()
    avatar: string;
}