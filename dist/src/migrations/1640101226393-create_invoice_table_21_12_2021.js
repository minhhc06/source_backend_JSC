"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInvoiceTable211220211640101226393 = void 0;
class createInvoiceTable211220211640101226393 {
    constructor() {
        this.name = 'createInvoiceTable211220211640101226393';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "invoice" ("id" SERIAL NOT NULL, "id_order" integer NOT NULL, "status_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_15d25c200d9bcd8a33f698daf18" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "invoice"`);
    }
}
exports.createInvoiceTable211220211640101226393 = createInvoiceTable211220211640101226393;
//# sourceMappingURL=1640101226393-create_invoice_table_21_12_2021.js.map