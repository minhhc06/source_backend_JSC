"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceRepository = void 0;
const common_1 = require("@nestjs/common");
const invoice_entity_1 = require("../../entities/invoice.entity");
const order_entity_1 = require("../../entities/order.entity");
const order_item_entity_1 = require("../../entities/order_item.entity");
const typeorm_1 = require("typeorm");
let InvoiceRepository = class InvoiceRepository extends typeorm_1.Repository {
    async createInvoiceItem(order, createOrderDto) {
        const invoice = this.create({ status_name: createOrderDto.statusName, order });
        try {
            return await this.save(invoice);
        }
        catch (error) {
            console.log(error.code);
            if (error.message.includes('unique constraint'))
                throw new common_1.HttpException('error!', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
InvoiceRepository = __decorate([
    (0, typeorm_1.EntityRepository)(invoice_entity_1.Invoice)
], InvoiceRepository);
exports.InvoiceRepository = InvoiceRepository;
//# sourceMappingURL=invoice_repository.js.map