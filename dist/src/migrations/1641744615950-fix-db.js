"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixDb1641744615950 = void 0;
class fixDb1641744615950 {
    constructor() {
        this.name = 'fixDb1641744615950';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "discount" DROP CONSTRAINT "FK_b08d6b007dd6852f4f25d054b9f"`);
        await queryRunner.query(`ALTER TABLE "product_image" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "discount" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "product_image" ADD CONSTRAINT "FK_40ca0cd115ef1ff35351bed8da2" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "discount" ADD CONSTRAINT "FK_63f33bfcb610459080764863792" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "discount" DROP CONSTRAINT "FK_63f33bfcb610459080764863792"`);
        await queryRunner.query(`ALTER TABLE "product_image" DROP CONSTRAINT "FK_40ca0cd115ef1ff35351bed8da2"`);
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "product_image" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "discount" ADD CONSTRAINT "FK_b08d6b007dd6852f4f25d054b9f" FOREIGN KEY ("id_product") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.fixDb1641744615950 = fixDb1641744615950;
//# sourceMappingURL=1641744615950-fix-db.js.map