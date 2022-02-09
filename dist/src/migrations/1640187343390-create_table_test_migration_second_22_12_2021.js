"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableTestMigrationSecond221220211640187343390 = void 0;
class createTableTestMigrationSecond221220211640187343390 {
    constructor() {
        this.name = 'createTableTestMigrationSecond221220211640187343390';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "test_migration" RENAME COLUMN "status_name" TO "migration"`);
        await queryRunner.query(`ALTER TABLE "test_migration" RENAME COLUMN "migration" TO "status_name"`);
        await queryRunner.query(`ALTER TABLE "test_migration" DROP COLUMN "status_name"`);
        await queryRunner.query(`ALTER TABLE "test_migration" ADD "migration" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test_migration" ADD "status_name" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "test_migration" DROP COLUMN "status_name"`);
        await queryRunner.query(`ALTER TABLE "test_migration" DROP COLUMN "migration"`);
        await queryRunner.query(`ALTER TABLE "test_migration" ADD "status_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test_migration" RENAME COLUMN "status_name" TO "migration"`);
        await queryRunner.query(`ALTER TABLE "test_migration" RENAME COLUMN "migration" TO "status_name"`);
    }
}
exports.createTableTestMigrationSecond221220211640187343390 = createTableTestMigrationSecond221220211640187343390;
//# sourceMappingURL=1640187343390-create_table_test_migration_second_22_12_2021.js.map