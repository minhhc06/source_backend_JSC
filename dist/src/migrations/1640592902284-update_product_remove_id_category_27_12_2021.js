"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductRemoveIdCategory271220211640592902284 = void 0;
class updateProductRemoveIdCategory271220211640592902284 {
    constructor() {
        this.name = 'updateProductRemoveIdCategory271220211640592902284';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "id_product_category"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" ADD "id_product_category" integer NOT NULL`);
    }
}
exports.updateProductRemoveIdCategory271220211640592902284 = updateProductRemoveIdCategory271220211640592902284;
//# sourceMappingURL=1640592902284-update_product_remove_id_category_27_12_2021.js.map