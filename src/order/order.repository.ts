import { BadRequestException, HttpException, HttpStatus, InternalServerErrorException } from "@nestjs/common";
import { Console } from "console";
import { Order } from "src/entities/order.entity";
import { Product } from "src/entities/product.entity";
import { User } from "src/entities/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateOrderDto, OrderItemDto,  } from "./dto/create-order.dto";
import { UpdateStatusDto } from "./dto/update-status-order.dto";
import { FetchOrderItem } from "./order_item/dto/fetch-order-item.dto";

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
    async createOrder(user: User,createOrderDto: CreateOrderDto, orderItem : OrderItemDto, product: Product): Promise<Order>{
        const { deliveryDate, note, city, district, ward, address, phoneNumber, nameReceiver} = createOrderDto;
    
       const order = this.create({
         total: orderItem.total,
         delivery_date: deliveryDate ,
          note,  
          city,
          district,
          ward, 
          address,
          phone_number: phoneNumber,
          name_receiver: nameReceiver, 
          quantity: orderItem.quantity,
          product,
          user});
       
        try{
          return await this.save(order);
        }catch(error){
            console.log(error.code);
            if (error.message.includes('unique constraint'))
       throw new HttpException('error!', HttpStatus.BAD_REQUEST);
            
        }
   }

   async updateStatusOrder(id: number, statusName: string): Promise<any>{

    const order = await this.findOne(id);
    
    if(order){
      try{
        await this.save({id: order.id, statusName: statusName});
        return 'success'
      }catch(error){
          console.log(error.code);
          if (error.message.includes('unique constraint'))
     throw new HttpException('error!', HttpStatus.BAD_REQUEST);
          
      }
    }else{
      throw new BadRequestException("order not found");
      
    }
    
}



async fetchOrderList(id: number): Promise<Order> {
  try {
    console.log('id ne ' + id);
    const query = this.createQueryBuilder('order')
    .leftJoinAndSelect('order.orderItems', 'orderItems')
    .select([
      'order.id',
      'orderItems.id',
      'orderItems.statusName'
    ]);

    const orders = await query.getOne();
    return orders;
  } catch (error) {
    console.log(error);
    throw new InternalServerErrorException();
  }
}


}