import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { StatusOrder } from '../../order/dto/create-order.dto';

export class PaginationDto {
  @ApiProperty()
  @IsNumberString()
  @IsOptional()
  page: number;
  @ApiProperty()
  @IsNumberString()
  @IsOptional()
  limit: number;
  @ApiProperty()
  @IsString()
  @IsOptional()
  searchString: string;
}

export class GetOrderDto extends PaginationDto {
  @ApiProperty()
  @IsEnum(StatusOrder)
  @IsOptional()
  status: StatusOrder;
}
