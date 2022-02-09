export declare enum StatusOrderItem {
    PROCESSING = "processing",
    ONDELIVERING = "onDelivering",
    PAYOFF = "payOff",
    FAILED = "failed"
}
export declare enum StatusOrder {
    PROCESSING = "processing",
    ONDELIVERING = "onDelivering",
    SUCCESS = "success",
    PAYOFF = "payOff",
    FAILED = "failed"
}
export declare class OrderItemDto {
    productId: number;
    quantity: number;
    price: number;
    total: number;
}
export declare class CreateOrderDto {
    deliveryDate: Date;
    note: string;
    phoneNumber: string;
    nameReceiver: string;
    statusName: StatusOrder;
    city: string;
    district: string;
    ward: string;
    address: string;
    orderItems: OrderItemDto[];
}
