"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTableTestMigrationSecond221220211640187695331 = void 0;
class updateTableTestMigrationSecond221220211640187695331 {
    constructor() {
        this.name = 'updateTableTestMigrationSecond221220211640187695331';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "test_migration_second" ("id" SERIAL NOT NULL, "migration" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_549cc3808fc191740f6e3ddf3e0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "test_migration" DROP COLUMN "migration"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "test_migration" ADD "migration" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "test_migration_second"`);
    }
}
exports.updateTableTestMigrationSecond221220211640187695331 = updateTableTestMigrationSecond221220211640187695331;
//# sourceMappingURL=1640187695331-update_table_test_migration_second_22_12_2021.js.map