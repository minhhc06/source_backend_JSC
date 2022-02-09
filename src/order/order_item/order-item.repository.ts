import { HttpException, HttpStatus, InternalServerErrorException } from "@nestjs/common";
import { Order } from "src/entities/order.entity";
import { OrderItem } from "src/entities/order_item.entity";
import { Product } from "src/entities/product.entity";
import { User } from "src/entities/user.entity";
import { EntityRepository, In, Repository } from "typeorm";
import { OrderItemDto } from "../dto/create-order.dto";
import { FetchOrderItem } from "./dto/fetch-order-item.dto";
import { UpdateStatusOrderItemDto } from "./dto/update-status-order-item.dto";

@EntityRepository(OrderItem)
export class OrderItemRepository extends Repository<OrderItem> {
    async createOrderItem(order: Order, product: Product, dto: OrderItemDto, user: User): Promise<OrderItem> {
        const { productId, quantity, total } = dto;

        const orderItem = this.create({ quantity, total, order, product, user });
        console.log('orderItem ' + orderItem.id);
        try {
            return await this.save(orderItem);
        } catch (error) {
            console.log(error.code);
            if (error.message.includes('unique constraint'))
                throw new HttpException('error!', HttpStatus.BAD_REQUEST);

        }
    }

    async deleteOrderItems(user: User, product: Product): Promise<any> {
        try {
            // console.log('id ' + deleteCartDto.productId);
            const query = await this.delete({ id: 10 });
            console.log('delete ' + query);
            return 'success';
        } catch (error) {
            console.log(error.code);
            if (error.message.includes('unique constraint'))
                throw new HttpException('error!', HttpStatus.BAD_REQUEST);

        }
    }

    async updateStatusOrderItem(updateStatusOrderItemDto: UpdateStatusOrderItemDto): Promise<string> {
        const { idOrderItem, status } = updateStatusOrderItemDto;
        try {
            const query = await this.save({ id: idOrderItem, statusName: status });
            return 'success';
        } catch (error) {
            console.log(error.code);
            if (error.message.includes('unique constraint'))
                throw new HttpException('error!', HttpStatus.BAD_REQUEST);

        }
    }

    async fetchHistoryOrder(fetchOrderItem: FetchOrderItem, userId: number): Promise<any> {
        try {
            const { page = 1, limit = 10, status } = fetchOrderItem;

            const query = this.createQueryBuilder('order_item')

            query
                .leftJoinAndSelect('order_item.product', 'product')
                .leftJoinAndSelect('order_item.order', 'order')
                .leftJoinAndSelect('product.productImages', 'productImages')
                .select(['order_item.id', 
                'order_item.quantity', 
                'order_item.total', 
                'order_item.created_at',
                'order_item.statusName',
                'order.id',
                'order.name_receiver',
                'order.statusName',
                'productImages.url',
                'productImages.id', 
                'product.id',
                'product.name', 
                'product.price']);

            if (status) {
                query.where('order_item.statusName = :status and order_item.userId = :userId', {
                    status,
                    userId: userId,
                });
            } else {
                query.where('order_item.userId = :userId', { userId: userId });

            }

            query.orderBy('order_item.id', 'DESC');

            const orders = await query
                .limit(limit)
                .offset(limit * (page - 1))
                .getMany();
            return {
                orders: orders,
                totalRecord: orders.length
            };
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException();
        }
    }




}