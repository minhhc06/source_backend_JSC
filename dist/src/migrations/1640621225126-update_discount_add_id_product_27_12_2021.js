"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDiscountAddIdProduct271220211640621225126 = void 0;
class updateDiscountAddIdProduct271220211640621225126 {
    constructor() {
        this.name = 'updateDiscountAddIdProduct271220211640621225126';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "discount" ADD "id_product" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "discount" ADD "productModelId" integer`);
        await queryRunner.query(`ALTER TABLE "discount" ADD CONSTRAINT "FK_d9340bdcdd67f7075deb1507272" FOREIGN KEY ("productModelId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "discount" DROP CONSTRAINT "FK_d9340bdcdd67f7075deb1507272"`);
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "productModelId"`);
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "id_product"`);
    }
}
exports.updateDiscountAddIdProduct271220211640621225126 = updateDiscountAddIdProduct271220211640621225126;
//# sourceMappingURL=1640621225126-update_discount_add_id_product_27_12_2021.js.map