"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct271220211640580519261 = void 0;
class updateProduct271220211640580519261 {
    constructor() {
        this.name = 'updateProduct271220211640580519261';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "about" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "brand" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "material" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "made_in" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "preserve" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "type_skin" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "type_skin" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "preserve" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "made_in" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "material" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "brand" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "about" SET NOT NULL`);
    }
}
exports.updateProduct271220211640580519261 = updateProduct271220211640580519261;
//# sourceMappingURL=1640580519261-update_product_27_12_2021.js.map