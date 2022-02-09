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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_repository_1 = require("../auth/users.repository");
const cart_repository_1 = require("../cart/cart.repository");
const delete_cart_dto_1 = require("../cart/dto/delete-cart.dto");
const order_entity_1 = require("../entities/order.entity");
const product_entity_1 = require("../entities/product.entity");
const user_entity_1 = require("../entities/user.entity");
const get_product_dto_1 = require("../product/dto/get-product.dto");
const product_images_repository_1 = require("../product/product-images.repository");
const typeorm_2 = require("typeorm");
const invoice_repository_1 = require("./invoice/invoice_repository");
const order_repository_1 = require("./order.repository");
const order_item_repository_1 = require("./order_item/order-item.repository");
let OrderService = class OrderService {
    constructor(orderRepository, orderItemRepository, invoiceRepository, productRepository, cartRepository, userRepository) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
        this.invoiceRepository = invoiceRepository;
        this.productRepository = productRepository;
        this.cartRepository = cartRepository;
        this.userRepository = userRepository;
    }
    async createOrder(user, createOrderDto) {
        const products = [];
        for (const orderItem of createOrderDto.orderItems) {
            const product = await this.productRepository.findOne(orderItem.productId);
            const order = await this.orderRepository.createOrder(user, createOrderDto, orderItem, product);
            if (product) {
                products.push(product.id);
            }
            else {
                throw new common_1.BadRequestException('Can not find product');
            }
        }
        await this.cartRepository.deleteCart(user, products);
        return {
            request: createOrderDto,
            status: 200,
            message: "success create order"
        };
    }
    async updateStatusOrder(user, updateStatusDto) {
        const result = await this.orderRepository.updateStatusOrder(updateStatusDto.idOrder, updateStatusDto.statusName);
        return {
            request: updateStatusDto,
            data: result
        };
    }
    async fetchOrderItem(fetchOrderItem, user) {
        const userInfo = await this.userRepository.findOne(user.id);
        if (userInfo) {
            const result = await this.orderItemRepository.fetchHistoryOrder(fetchOrderItem, userInfo.id);
            return {
                request: fetchOrderItem,
                page: fetchOrderItem.page,
                data: result
            };
        }
        else {
            throw new common_1.BadRequestException('User not found');
        }
    }
    async updateStatusOrderItem(user, updateStatusOrderItemDto) {
        const userInfo = await this.userRepository.findOne(user.id);
        if (userInfo) {
            const result = await this.orderItemRepository.updateStatusOrderItem(updateStatusOrderItemDto);
        }
        else {
            throw new common_1.BadRequestException('User not found');
        }
    }
    async getOrders(paginationDto, userDto) {
        try {
            const { page = 1, limit = 10, status } = paginationDto;
            const query = this.orderRepository
                .createQueryBuilder('order')
                .leftJoinAndSelect('order.user', 'user')
                .leftJoinAndSelect('order.invoice', 'invoice')
                .leftJoinAndSelect('order.product', 'product')
                .leftJoinAndSelect('product.productImages', 'productImages')
                .select([
                'order.id',
                'order.total',
                'order.delivery_date',
                'order.note',
                'order.phone_number',
                'order.name_receiver',
                'order.statusName',
                'order.city',
                'order.district',
                'order.ward',
                'order.address',
                'user.fullname',
                'user.username',
                'invoice.status_name',
                'product.id',
                'product.name',
                'product.price',
                'product.quantity',
                'product.about',
                'product.brand',
                'product.material',
                'product.made_in',
                'product.expiry',
                'product.preserve',
                'product.type_skin',
                'productImages.id',
                'productImages.url',
            ]);
            if (status) {
                query.where('order.userId = :userId and order.statusName = :status', {
                    userId: userDto.id,
                    status,
                });
            }
            else {
                query.where('order.userId = :userId', {
                    userId: userDto.id,
                });
            }
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
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_repository_1.OrderRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(order_item_repository_1.OrderItemRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(invoice_repository_1.InvoiceRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(4, (0, typeorm_1.InjectRepository)(cart_repository_1.CartRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(users_repository_1.UsersRepository)),
    __metadata("design:paramtypes", [order_repository_1.OrderRepository,
        order_item_repository_1.OrderItemRepository,
        invoice_repository_1.InvoiceRepository,
        typeorm_2.Repository,
        cart_repository_1.CartRepository,
        users_repository_1.UsersRepository])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map