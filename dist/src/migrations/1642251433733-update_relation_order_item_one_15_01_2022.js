"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRelationOrderItemOne150120221642251433733 = void 0;
class updateRelationOrderItemOne150120221642251433733 {
    constructor() {
        this.name = 'updateRelationOrderItemOne150120221642251433733';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_item" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "UQ_904370c093ceea4369659a3c810" UNIQUE ("productId")`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_904370c093ceea4369659a3c810" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "UQ_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "productId"`);
    }
}
exports.updateRelationOrderItemOne150120221642251433733 = updateRelationOrderItemOne150120221642251433733;
//# sourceMappingURL=1642251433733-update_relation_order_item_one_15_01_2022.js.map