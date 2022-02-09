"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductRemoveIdDiscount271220211640592965491 = void 0;
class updateProductRemoveIdDiscount271220211640592965491 {
    constructor() {
        this.name = 'updateProductRemoveIdDiscount271220211640592965491';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "id_discount"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" ADD "id_discount" integer NOT NULL`);
    }
}
exports.updateProductRemoveIdDiscount271220211640592965491 = updateProductRemoveIdDiscount271220211640592965491;
//# sourceMappingURL=1640592965491-update_product_remove_id_discount_27_12_2021.js.map