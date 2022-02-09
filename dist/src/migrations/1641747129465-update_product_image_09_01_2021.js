"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductImage090120211641747129465 = void 0;
class updateProductImage090120211641747129465 {
    constructor() {
        this.name = 'updateProductImage090120211641747129465';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product_image" DROP COLUMN "id_product"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product_image" ADD "id_product" integer NOT NULL`);
    }
}
exports.updateProductImage090120211641747129465 = updateProductImage090120211641747129465;
//# sourceMappingURL=1641747129465-update_product_image_09_01_2021.js.map