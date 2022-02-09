"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableTestMigration221220211640186226117 = void 0;
class createTableTestMigration221220211640186226117 {
    constructor() {
        this.name = 'createTableTestMigration221220211640186226117';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "test_migration" ("id" SERIAL NOT NULL, "status_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_e328d012814f2a2d732f882e9af" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "test_migration"`);
    }
}
exports.createTableTestMigration221220211640186226117 = createTableTestMigration221220211640186226117;
//# sourceMappingURL=1640186226117-create_table_test_migration_22_12_2021.js.map