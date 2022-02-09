"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relationOrderOrderItem1642087390835 = void 0;
class relationOrderOrderItem1642087390835 {
    constructor() {
        this.name = 'relationOrderOrderItem1642087390835';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_item" ADD "orderId" integer`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "orderId"`);
    }
}
exports.relationOrderOrderItem1642087390835 = relationOrderOrderItem1642087390835;
//# sourceMappingURL=1642087390835-relation-order-orderItem.js.map