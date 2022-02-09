"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemRepository = void 0;
const common_1 = require("@nestjs/common");
const order_entity_1 = require("../../entities/order.entity");
const order_item_entity_1 = require("../../entities/order_item.entity");
const product_entity_1 = require("../../entities/product.entity");
const user_entity_1 = require("../../entities/user.entity");
const typeorm_1 = require("typeorm");
let OrderItemRepository = class OrderItemRepository extends typeorm_1.Repository {
    async createOrderItem(order, product, dto, user) {
        const { productId, quantity, total } = dto;
        const orderItem = this.create({ quantity, total, order, product, user });
        console.log('orderItem ' + orderItem.id);
        try {
            return await this.save(orderItem);
        }
        catch (error) {
            console.log(error.code);
            if (error.message.includes('unique constraint'))
                throw new common_1.HttpException('error!', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteOrderItems(user, product) {
        try {
            const query = await this.delete({ id: 10 });
            console.log('delete ' + query);
            return 'success';
        }
        catch (error) {
            console.log(error.code);
            if (error.message.includes('unique constraint'))
                throw new common_1.HttpException('error!', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateStatusOrderItem(updateStatusOrderItemDto) {
        const { idOrderItem, status } = updateStatusOrderItemDto;
        try {
            const query = await this.save({ id: idOrderItem, statusName: status });
            return 'success';
        }
        catch (error) {
            console.log(error.code);
            if (error.message.includes('unique constraint'))
                throw new common_1.HttpException('error!', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async fetchHistoryOrder(fetchOrderItem, userId) {
        try {
            const { page = 1, limit = 10, status } = fetchOrderItem;
            const query = this.createQueryBuilder('order_item');
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
            }
            else {
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
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException();
        }
    }
};
OrderItemRepository = __decorate([
    (0, typeorm_1.EntityRepository)(order_item_entity_1.OrderItem)
], OrderItemRepository);
exports.OrderItemRepository = OrderItemRepository;
//# sourceMappingURL=order-item.repository.js.map