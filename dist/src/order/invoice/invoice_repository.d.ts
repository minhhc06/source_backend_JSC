import { Invoice } from "src/entities/invoice.entity";
import { Order } from "src/entities/order.entity";
import { Repository } from "typeorm";
import { CreateOrderDto } from "../dto/create-order.dto";
export declare class InvoiceRepository extends Repository<Invoice> {
    createInvoiceItem(order: Order, createOrderDto: CreateOrderDto): Promise<Invoice>;
}
