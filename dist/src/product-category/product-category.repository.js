"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryRepository = void 0;
const common_1 = require("@nestjs/common");
const product_category_entity_1 = require("../entities/product_category.entity");
const user_entity_1 = require("../entities/user.entity");
const typeorm_1 = require("typeorm");
let ProductCategoryRepository = class ProductCategoryRepository extends typeorm_1.Repository {
    async createProductCategory(user, createProductCategoryDto) {
        const { name } = createProductCategoryDto;
        const order = this.create({ name });
        try {
            return await this.save(order);
        }
        catch (error) {
            console.log(error.code);
            if (error.message.includes('unique constraint'))
                throw new common_1.HttpException('error!', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getProductCategory() {
        const query = this.createQueryBuilder('product_category');
        try {
            const productCategories = await query.getMany();
            return productCategories;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
};
ProductCategoryRepository = __decorate([
    (0, typeorm_1.EntityRepository)(product_category_entity_1.ProductCategory)
], ProductCategoryRepository);
exports.ProductCategoryRepository = ProductCategoryRepository;
//# sourceMappingURL=product-category.repository.js.map