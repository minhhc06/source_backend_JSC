"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const discount_entity_1 = require("../entities/discount.entity");
let DiscountRepository = class DiscountRepository extends typeorm_1.Repository {
    async getDiscount() {
        const query = this.createQueryBuilder('discount');
        try {
            const discountModel = await query.getMany();
            return discountModel;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async createDiscount(discountDto) {
        const { id_product, discount, name_discount } = discountDto;
        const discountModel = this.create({
            id_product,
            discount,
            name_discount
        });
        await this.save(discountModel);
        return discountModel;
    }
};
DiscountRepository = __decorate([
    (0, typeorm_1.EntityRepository)(discount_entity_1.Discount)
], DiscountRepository);
exports.DiscountRepository = DiscountRepository;
//# sourceMappingURL=discount.repository.js.map