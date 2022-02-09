"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStatusTable211220211640101005022 = void 0;
class createStatusTable211220211640101005022 {
    constructor() {
        this.name = 'createStatusTable211220211640101005022';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "status" ("id" SERIAL NOT NULL, "id_order" integer NOT NULL, "status_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_e12743a7086ec826733f54e1d95" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "status"`);
    }
}
exports.createStatusTable211220211640101005022 = createStatusTable211220211640101005022;
//# sourceMappingURL=1640101005022-create_status_table_21_12_2021.js.map