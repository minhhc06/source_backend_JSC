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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const delete_cart_dto_1 = require("../cart/dto/delete-cart.dto");
const order_entity_1 = require("../entities/order.entity");
const user_entity_1 = require("../entities/user.entity");
const get_product_dto_1 = require("../product/dto/get-product.dto");
const create_order_dto_1 = require("./dto/create-order.dto");
const update_status_order_dto_1 = require("./dto/update-status-order.dto");
const order_service_1 = require("./order.service");
const fetch_order_item_dto_1 = require("./order_item/dto/fetch-order-item.dto");
const update_status_order_item_dto_1 = require("./order_item/dto/update-status-order-item.dto");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async getOrder(user, paginationDto) {
        const order = await this.orderService.getOrders(paginationDto, user);
        return {
            status: 200,
            message: 'ok',
            data: order,
        };
    }
    createProduct(user, createOrderDto) {
        return this.orderService.createOrder(user, createOrderDto);
    }
    updateStatusOrder(user, updateStatusDto) {
        return this.orderService.updateStatusOrder(user, updateStatusDto);
    }
    fetchOrderItem(user, fetchOrderItem) {
        return this.orderService.fetchOrderItem(fetchOrderItem, user);
    }
    updateStatusOrderItem(user, updateStatusOrderItemDto) {
        return this.orderService.updateStatusOrderItem(user, updateStatusOrderItemDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, get_product_dto_1.GetOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrder", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Put)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, update_status_order_dto_1.UpdateStatusDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateStatusOrder", null);
__decorate([
    (0, common_1.Get)('/fetch-order-item'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, fetch_order_item_dto_1.FetchOrderItem]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "fetchOrderItem", null);
__decorate([
    (0, common_1.Put)('/update-status-order-item'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, update_status_order_item_dto_1.UpdateStatusOrderItemDto]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "updateStatusOrderItem", null);
OrderController = __decorate([
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map