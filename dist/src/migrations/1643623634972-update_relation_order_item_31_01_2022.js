"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRelationOrderItem310120221643623634972 = void 0;
class updateRelationOrderItem310120221643623634972 {
    constructor() {
        this.name = 'updateRelationOrderItem310120221643623634972';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_item" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_845716d96530a440c6cdc6c7346" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_845716d96530a440c6cdc6c7346"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "userId"`);
    }
}
exports.updateRelationOrderItem310120221643623634972 = updateRelationOrderItem310120221643623634972;
//# sourceMappingURL=1643623634972-update_relation_order_item_31_01_2022.js.map