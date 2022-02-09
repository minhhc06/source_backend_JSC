import { HttpException, HttpStatus } from "@nestjs/common";
import { Invoice } from "src/entities/invoice.entity";
import { Order } from "src/entities/order.entity";
import { OrderItem } from "src/entities/order_item.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateOrderDto, OrderItemDto } from "../dto/create-order.dto";

@EntityRepository(Invoice)
export class InvoiceRepository extends Repository<Invoice> {
    async createInvoiceItem(order: Order, createOrderDto: CreateOrderDto): Promise<Invoice>{
        const invoice = this.create({status_name: createOrderDto.statusName ,order});
         try{
           return await this.save(invoice);
         }catch(error){
             console.log(error.code);
             if (error.message.includes('unique constraint'))
        throw new HttpException('error!', HttpStatus.BAD_REQUEST);
         }
    }
}
