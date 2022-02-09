"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const common_1 = require("@nestjs/common");
const order_entity_1 = require("../entities/order.entity");
const product_entity_1 = require("../entities/product.entity");
const user_entity_1 = require("../entities/user.entity");
const typeorm_1 = require("typeorm");
let OrderRepository = class OrderRepository extends typeorm_1.Repository {
    async createOrder(user, createOrderDto, orderItem, product) {
        const { deliveryDate, note, city, district, ward, address, phoneNumber, nameReceiver } = createOrderDto;
        const order = this.create({
            total: orderItem.total,
            delivery_date: deliveryDate,
            note,
            city,
            district,
            ward,
            address,
            phone_number: phoneNumber,
            name_receiver: nameReceiver,
            quantity: orderItem.quantity,
            product,
            user
        });
        try {
            return await this.save(order);
        }
        catch (error) {
            console.log(error.code);
            if (error.message.includes('unique constraint'))
                throw new common_1.HttpException('error!', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateStatusOrder(id, statusName) {
        const order = await this.findOne(id);
        if (order) {
            try {
                await this.save({ id: order.id, statusName: statusName });
                return 'success';
            }
            catch (error) {
                console.log(error.code);
                if (error.message.includes('unique constraint'))
                    throw new common_1.HttpException('error!', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        else {
            throw new common_1.BadRequestException("order not found");
        }
    }
    async fetchOrderList(id) {
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
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException();
        }
    }
};
OrderRepository = __decorate([
    (0, typeorm_1.EntityRepository)(order_entity_1.Order)
], OrderRepository);
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=order.repository.js.map