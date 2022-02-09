"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGiftTable211220211640102040419 = void 0;
class createGiftTable211220211640102040419 {
    constructor() {
        this.name = 'createGiftTable211220211640102040419';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "gift" ("id" SERIAL NOT NULL, "id_user" integer NOT NULL, "id_product" integer NOT NULL, "price" integer NOT NULL, "discount" double precision, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_f91217caddc01a085837ebe0606" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "gift"`);
    }
}
exports.createGiftTable211220211640102040419 = createGiftTable211220211640102040419;
//# sourceMappingURL=1640102040419-create_gift_table_21_12_2021.js.map