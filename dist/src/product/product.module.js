"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_images_repository_1 = require("./product-images.repository");
const product_service_1 = require("./product.service");
const product_controller_1 = require("./product.controller");
const discount_entity_1 = require("../entities/discount.entity");
const product_entity_1 = require("../entities/product.entity");
const product_category_entity_1 = require("../entities/product_category.entity");
const product_repository_1 = require("./product.repository");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                discount_entity_1.Discount,
                product_entity_1.Product,
                product_images_repository_1.ProductImageRepository,
                product_category_entity_1.ProductCategory,
                product_repository_1.ProductRepository,
            ]),
        ],
        controllers: [product_controller_1.ProductController],
        providers: [product_service_1.ProductService],
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map