"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTableDiscount221220211640185058887 = void 0;
class updateTableDiscount221220211640185058887 {
    constructor() {
        this.name = 'updateTableDiscount221220211640185058887';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "discount" ADD "name_discount" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "name_discount"`);
    }
}
exports.updateTableDiscount221220211640185058887 = updateTableDiscount221220211640185058887;
//# sourceMappingURL=1640185058887-update_table_discount_22_12_2021.js.map