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
exports.ProductController = exports.storage = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const product_entity_1 = require("../entities/product.entity");
const create_product_dto_1 = require("./dto/create-product.dto");
const multer = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const upload_image_dto_1 = require("./dto/upload-image.dto");
const product_image_entity_1 = require("../entities/product_image.entity");
const fetch_products_dto_1 = require("./dto/fetch-products.dto");
exports.storage = {
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10240000,
    },
};
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async getProduct(fetchProductsDto) {
        const products = await this.productService.getProduct(fetchProductsDto);
        return {
            status: 200,
            message: 'ok',
            data: products,
            page: fetchProductsDto.page || 1,
            limit: fetchProductsDto.limit || 20,
            totalRecords: products.length,
        };
    }
    async fetchDetailProduct(param) {
        const product = await this.productService.getDetailProduct(param.id);
        return {
            status: 200,
            message: 'ok',
            data: product,
        };
    }
    createProduct(createProductDto) {
        console.log(createProductDto);
        return this.productService.createProduct(createProductDto);
    }
    removeProductImage(productId) {
        return this.productService.removeProductImage(productId);
    }
    createTask(uploadImageDto, image) {
        uploadImageDto.image_name = image.originalname;
        return this.productService.uploadImageService(uploadImageDto, image);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fetch_products_dto_1.FetchProductsDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProduct", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "fetchDetailProduct", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Post)('remove-product-image'),
    __param(0, (0, common_1.Body)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "removeProductImage", null);
__decorate([
    (0, common_1.Post)('/uploadImage'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', exports.storage)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [upload_image_dto_1.UploadImageDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createTask", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map