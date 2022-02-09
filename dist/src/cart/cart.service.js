"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cart_entity_1 = require("../entities/cart.entity");
const product_entity_1 = require("../entities/product.entity");
const user_entity_1 = require("../entities/user.entity");
const get_product_dto_1 = require("../product/dto/get-product.dto");
const product_images_repository_1 = require("../product/product-images.repository");
const typeorm_2 = require("typeorm");
const cart_repository_1 = require("./cart.repository");
let CartService = class CartService {
    constructor(cartRepository, product) {
        this.cartRepository = cartRepository;
        this.product = product;
    }
    async createCart(user, createCartDto) {
        const product = await this.product.findOne(createCartDto.productId);
        const foundCart = await this.cartRepository.findOne({
            where: { product, user },
        });
        console.log('foundCart ' + foundCart);
        if (foundCart) {
            await this.cartRepository.updateCart(user, createCartDto, foundCart);
        }
        else {
            const order = await this.cartRepository.createCart(user, product);
        }
        return 'success';
    }
    async getCarts(paginationDto, userDto) {
        try {
            const { page = 1, limit = 10 } = paginationDto;
            const query = this.cartRepository
                .createQueryBuilder('cart')
                .leftJoinAndSelect('cart.user', 'user')
                .leftJoinAndSelect('cart.product', 'product')
                .leftJoinAndSelect('product.productImages', 'productImages')
                .where('cart.userId = :userId', {
                userId: userDto.id,
            });
            const orders = await query
                .limit(limit)
                .offset(limit * (page - 1))
                .getMany();
            return orders;
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException();
        }
    }
    async getTotalCarts(userDto) {
        try {
            const query = this.cartRepository
                .createQueryBuilder('cart')
                .where('cart.userId = :userId', {
                userId: userDto.id,
            });
            const [orders, count] = await query.getManyAndCount();
            return { orders, count };
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException();
        }
    }
    async deleteCartItem(userDto, deleteCartDto) {
        try {
            const query = this.cartRepository
                .deleteCartItem(deleteCartDto.id);
            return 'success';
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException();
        }
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_repository_1.CartRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [cart_repository_1.CartRepository,
        typeorm_2.Repository])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map