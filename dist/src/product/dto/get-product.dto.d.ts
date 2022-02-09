import { StatusOrder } from '../../order/dto/create-order.dto';
export declare class PaginationDto {
    page: number;
    limit: number;
    searchString: string;
}
export declare class GetOrderDto extends PaginationDto {
    status: StatusOrder;
}
