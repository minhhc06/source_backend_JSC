import { ApiProperty } from "@nestjs/swagger";
import { PaginationDto } from "./get-product.dto";

export class FetchProductsDto extends PaginationDto {
    @ApiProperty()
    categoryId: number;
  }