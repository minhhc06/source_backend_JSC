"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRelationOrderItemMany150120221642251560533 = void 0;
class updateRelationOrderItemMany150120221642251560533 {
    constructor() {
        this.name = 'updateRelationOrderItemMany150120221642251560533';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "UQ_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_904370c093ceea4369659a3c810" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "UQ_904370c093ceea4369659a3c810" UNIQUE ("productId")`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_904370c093ceea4369659a3c810" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.updateRelationOrderItemMany150120221642251560533 = updateRelationOrderItemMany150120221642251560533;
//# sourceMappingURL=1642251560533-update_relation_order_item_many_15_01_2022.js.map