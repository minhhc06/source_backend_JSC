"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImageRepository = void 0;
const product_entity_1 = require("../entities/product.entity");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const discount_entity_1 = require("../entities/discount.entity");
const product_image_entity_1 = require("../entities/product_image.entity");
let ProductImageRepository = class ProductImageRepository extends typeorm_1.Repository {
    async uploadImage(image, product) {
        const productImg = this.create({
            product: product,
            url: image.file,
        });
        console.log(productImg);
        try {
            return await this.save(productImg);
        }
        catch (error) {
            console.log(error.code);
            if (error.message.includes('Error'))
                throw new common_1.HttpException('Fail!', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
ProductImageRepository = __decorate([
    (0, typeorm_1.EntityRepository)(product_image_entity_1.ProductImage)
], ProductImageRepository);
exports.ProductImageRepository = ProductImageRepository;
//# sourceMappingURL=product-images.repository.js.map