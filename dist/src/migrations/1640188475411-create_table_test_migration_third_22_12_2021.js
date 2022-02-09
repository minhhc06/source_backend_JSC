"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableTestMigrationThird221220211640188475411 = void 0;
class createTableTestMigrationThird221220211640188475411 {
    constructor() {
        this.name = 'createTableTestMigrationThird221220211640188475411';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "test_migration_third" ("id" SERIAL NOT NULL, "migration_third" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_99d3cb7ed059a7c318f68485bbf" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "test_migration_third"`);
    }
}
exports.createTableTestMigrationThird221220211640188475411 = createTableTestMigrationThird221220211640188475411;
//# sourceMappingURL=1640188475411-create_table_test_migration_third_22_12_2021.js.map