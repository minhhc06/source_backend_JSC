"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relationOrderInvoice1642090990941 = void 0;
class relationOrderInvoice1642090990941 {
    constructor() {
        this.name = 'relationOrderInvoice1642090990941';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "invoice" RENAME COLUMN "id_order" TO "orderId"`);
        await queryRunner.query(`ALTER TABLE "invoice" ALTER COLUMN "orderId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "invoice" ADD CONSTRAINT "FK_f494ce6746b91e9ec9562af4857" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "invoice" DROP CONSTRAINT "FK_f494ce6746b91e9ec9562af4857"`);
        await queryRunner.query(`ALTER TABLE "invoice" ALTER COLUMN "orderId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "invoice" RENAME COLUMN "orderId" TO "id_order"`);
    }
}
exports.relationOrderInvoice1642090990941 = relationOrderInvoice1642090990941;
//# sourceMappingURL=1642090990941-relation-order-invoice.js.map