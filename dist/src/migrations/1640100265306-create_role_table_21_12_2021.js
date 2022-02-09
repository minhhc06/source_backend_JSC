"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoleTable211220211640100265306 = void 0;
class createRoleTable211220211640100265306 {
    constructor() {
        this.name = 'createRoleTable211220211640100265306';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "role"`);
    }
}
exports.createRoleTable211220211640100265306 = createRoleTable211220211640100265306;
//# sourceMappingURL=1640100265306-create_role_table_21_12_2021.js.map