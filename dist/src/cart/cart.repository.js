"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRepository = void 0;
const common_1 = require("@nestjs/common");
const cart_entity_1 = require("../entities/cart.entity");
const product_entity_1 = require("../entities/product.entity");
const user_entity_1 = require("../entities/user.entity");
const typeorm_1 = require("typeorm");
let CartRepository = class CartRepository extends typeorm_1.Repository {
    async createCart(user, product) {
        const order = this.create({ user, product, });
        try {
            return await this.save(order);
        }
        catch (error) {
            console.log(error.code);
            if (error.message.includes('unique constraint'))
                throw new common_1.HttpException('error!', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async countTotalCart(userId) {
        const query = this.createQueryBuilder('cart');
        query.innerJoinAndSelect('cart.user', 'user', 'cart.userId = :userId', { userId });
        console.log('qeury ne ' + query);
        try {
            const carts = await query.getMany();
            return carts.length;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async updateCart(user, createCartDto, cart) {
        const { productId, quantity } = createCartDto;
        try {
            const quantity = +cart.quantity + 1;
            return await this.save({ id: cart.id, product: { id: productId }, quantity });
        }
        catch (error) {
            console.log(error.code);
            if (error.message.includes('unique constraint'))
                throw new common_1.HttpException('error!', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteCart(user, productIds) {
        try {
            await this.delete({ product: { id: (0, typeorm_1.In)(productIds) }, user });
            return 'success';
        }
        catch (error) {
            console.log(error.code);
            if (error.message.includes('unique constraint'))
                throw new common_1.HttpException('error!', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteCartItem(id) {
        try {
            await this.delete({ id: id });
            return 'success';
        }
        catch (error) {
            console.log(error.code);
            if (error.message.includes('unique constraint'))
                throw new common_1.HttpException('error!', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
CartRepository = __decorate([
    (0, typeorm_1.EntityRepository)(cart_entity_1.Cart)
], CartRepository);
exports.CartRepository = CartRepository;
//# sourceMappingURL=cart.repository.js.map