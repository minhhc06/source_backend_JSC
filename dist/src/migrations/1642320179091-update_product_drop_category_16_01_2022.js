"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductDropCategory160120221642320179091 = void 0;
class updateProductDropCategory160120221642320179091 {
    constructor() {
        this.name = 'updateProductDropCategory160120221642320179091';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "category"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" ADD "category" character varying NOT NULL`);
    }
}
exports.updateProductDropCategory160120221642320179091 = updateProductDropCategory160120221642320179091;
//# sourceMappingURL=1642320179091-update_product_drop_category_16_01_2022.js.map