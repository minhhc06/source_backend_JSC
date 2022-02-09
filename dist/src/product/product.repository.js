"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
const product_entity_1 = require("../entities/product.entity");
const typeorm_1 = require("typeorm");
let ProductRepository = class ProductRepository extends typeorm_1.Repository {
    async detailProductRepository(id) {
        const productResult = await this.findOne({
            id: id,
        });
        if (productResult) {
            const query = this
                .createQueryBuilder('product')
                .select([
                'product.id',
                'product.name',
                'product.price',
                'product.quantity',
            ])
                .leftJoinAndSelect('product.discounts', 'discount')
                .leftJoinAndSelect('product.productImages', 'productImage')
                .addSelect([
                'productImage.id',
                'productImage.url',
                'discount.discount',
                'discount.name_discount',
            ]).orderBy('product.id', 'DESC');
            return productResult;
        }
        else {
            throw new common_1.BadRequestException('Product not found');
        }
    }
};
ProductRepository = __decorate([
    (0, typeorm_1.EntityRepository)(product_entity_1.Product)
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map