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
exports.DiscountService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const discount_entity_1 = require("../entities/discount.entity");
const product_entity_1 = require("../entities/product.entity");
const discount_repository_1 = require("./discount.repository");
let DiscountService = class DiscountService {
    constructor(discountRepository) {
        this.discountRepository = discountRepository;
    }
    getDiscount() {
        return this.discountRepository.getDiscount();
    }
    createDiscount(creatDiscountDto) {
        return this.discountRepository.createDiscount(creatDiscountDto);
    }
};
DiscountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(discount_repository_1.DiscountRepository)),
    __metadata("design:paramtypes", [discount_repository_1.DiscountRepository])
], DiscountService);
exports.DiscountService = DiscountService;
//# sourceMappingURL=discount.service.js.map