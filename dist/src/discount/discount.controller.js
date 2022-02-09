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
exports.DiscountController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const class_transformer_1 = require("class-transformer");
const discount_entity_1 = require("../entities/discount.entity");
const discount_service_1 = require("./discount.service");
const discount_dto_1 = require("./dto/discount.dto");
let DiscountController = class DiscountController {
    constructor(discountService) {
        this.discountService = discountService;
    }
    async getDiscount() {
        const discountModel = (0, class_transformer_1.serialize)(await this.discountService.getDiscount());
        return {
            status: 200,
            message: 'ok',
            data: (0, class_transformer_1.deserialize)(discount_entity_1.Discount, discountModel)
        };
    }
    createDiscount(discountDto) {
        console.log(discountDto);
        return this.discountService.createDiscount(discountDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "getDiscount", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discount_dto_1.DiscountDto]),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "createDiscount", null);
DiscountController = __decorate([
    (0, common_1.Controller)('discount'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:paramtypes", [discount_service_1.DiscountService])
], DiscountController);
exports.DiscountController = DiscountController;
//# sourceMappingURL=discount.controller.js.map