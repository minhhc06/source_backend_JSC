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
exports.ProductCategoryController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const product_category_entity_1 = require("../entities/product_category.entity");
const user_entity_1 = require("../entities/user.entity");
const create_product_category_dto_1 = require("./dto/create-product-category.dto");
const product_category_service_1 = require("./product-category.service");
let ProductCategoryController = class ProductCategoryController {
    constructor(productCategoryService) {
        this.productCategoryService = productCategoryService;
    }
    async getProductCategories() {
        const categories = await this.productCategoryService.getProductCategory();
        return {
            status: 200,
            message: 'success',
            data: categories,
        };
    }
    createProduct(user, createProductCategoryDto) {
        return this.productCategoryService.createProductCategory(user, createProductCategoryDto);
    }
};
__decorate([
    (0, common_1.Get)('/get-product-categories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductCategoryController.prototype, "getProductCategories", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, create_product_category_dto_1.CreateProductCategoryDto]),
    __metadata("design:returntype", Promise)
], ProductCategoryController.prototype, "createProduct", null);
ProductCategoryController = __decorate([
    (0, common_1.Controller)('product-category'),
    __metadata("design:paramtypes", [product_category_service_1.ProductCategoryService])
], ProductCategoryController);
exports.ProductCategoryController = ProductCategoryController;
//# sourceMappingURL=product-category.controller.js.map