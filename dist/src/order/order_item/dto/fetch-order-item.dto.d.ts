import { StatusOrder } from "src/order/dto/create-order.dto";
import { PaginationDto } from "src/product/dto/get-product.dto";
export declare class FetchOrderItem extends PaginationDto {
    status: StatusOrder;
}
