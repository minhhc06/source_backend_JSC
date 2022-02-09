"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductCategory271220211640590649560 = void 0;
class updateProductCategory271220211640590649560 {
    constructor() {
        this.name = 'updateProductCategory271220211640590649560';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" ADD "category" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "category"`);
    }
}
exports.updateProductCategory271220211640590649560 = updateProductCategory271220211640590649560;
//# sourceMappingURL=1640590649560-update_product_category_27_12_2021.js.map