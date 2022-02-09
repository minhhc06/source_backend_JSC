import { Body, Controller, Delete, Get, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "src/auth/get-user.decorator";
import { DeleteCartDto } from "src/cart/dto/delete-cart.dto";
import { Order } from "src/entities/order.entity";
import { User } from "src/entities/user.entity";
import {GetOrderDto, PaginationDto} from "src/product/dto/get-product.dto";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateStatusDto } from "./dto/update-status-order.dto";
import { OrderService } from "./order.service";
import { FetchOrderItem } from "./order_item/dto/fetch-order-item.dto";
import { UpdateStatusOrderItemDto } from "./order_item/dto/update-status-order-item.dto";

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    async getOrder(@GetUser()user: User, @Body() paginationDto: GetOrderDto) {
      const order = await this.orderService.getOrders(paginationDto, user);
      return {
        status: 200,
        message: 'ok',
        data: order,
      };
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    createProduct(@GetUser() user: User, @Body() createOrderDto: CreateOrderDto): Promise<Order> {
      
      return this.orderService.createOrder(user, createOrderDto);
    }

    @Put()
    @UseGuards(AuthGuard('jwt'))
    updateStatusOrder(@GetUser() user: User, @Body() updateStatusDto: UpdateStatusDto): Promise<any> {
      
      return this.orderService.updateStatusOrder(user, updateStatusDto);
    }
  
    @Get('/fetch-order-item')
    @UseGuards(AuthGuard('jwt'))
    fetchOrderItem(@GetUser() user: User, @Body() fetchOrderItem: FetchOrderItem): Promise<any> {
      
      return this.orderService.fetchOrderItem(fetchOrderItem, user);
    }

    @Put('/update-status-order-item')
    @UseGuards(AuthGuard('jwt'))
    updateStatusOrderItem(@GetUser() user: User, @Body() updateStatusOrderItemDto :UpdateStatusOrderItemDto){
      return this.orderService.updateStatusOrderItem(user, updateStatusOrderItemDto);
    }


}