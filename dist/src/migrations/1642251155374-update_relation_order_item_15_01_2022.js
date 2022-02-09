"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRelationOrderItem150120221642251155374 = void 0;
class updateRelationOrderItem150120221642251155374 {
    constructor() {
        this.name = 'updateRelationOrderItem150120221642251155374';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "UQ_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "productId"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_item" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "UQ_904370c093ceea4369659a3c810" UNIQUE ("productId")`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_904370c093ceea4369659a3c810" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.updateRelationOrderItem150120221642251155374 = updateRelationOrderItem150120221642251155374;
//# sourceMappingURL=1642251155374-update_relation_order_item_15_01_2022.js.map