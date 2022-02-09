"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relationOrderItemProduct140120221642169345651 = void 0;
class relationOrderItemProduct140120221642169345651 {
    constructor() {
        this.name = 'relationOrderItemProduct140120221642169345651';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_item" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "UQ_904370c093ceea4369659a3c810" UNIQUE ("productId")`);
        await queryRunner.query(`ALTER TABLE "product" ADD "orderItemId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_5f2592aee3ed4989c57dae960ea" UNIQUE ("orderItemId")`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_904370c093ceea4369659a3c810" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_5f2592aee3ed4989c57dae960ea" FOREIGN KEY ("orderItemId") REFERENCES "order_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_5f2592aee3ed4989c57dae960ea"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_5f2592aee3ed4989c57dae960ea"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "orderItemId"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "UQ_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "productId"`);
    }
}
exports.relationOrderItemProduct140120221642169345651 = relationOrderItemProduct140120221642169345651;
//# sourceMappingURL=1642169345651-relation-orderItem-product_14_01_2022.js.map