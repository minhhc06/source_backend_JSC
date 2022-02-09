import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableTestMigrationSecond221220211640187343390 implements MigrationInterface {
    name = 'createTableTestMigrationSecond221220211640187343390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test_migration" RENAME COLUMN "status_name" TO "migration"`);
        await queryRunner.query(`ALTER TABLE "test_migration" RENAME COLUMN "migration" TO "status_name"`);
        await queryRunner.query(`ALTER TABLE "test_migration" DROP COLUMN "status_name"`);
        await queryRunner.query(`ALTER TABLE "test_migration" ADD "migration" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test_migration" ADD "status_name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test_migration" DROP COLUMN "status_name"`);
        await queryRunner.query(`ALTER TABLE "test_migration" DROP COLUMN "migration"`);
        await queryRunner.query(`ALTER TABLE "test_migration" ADD "status_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test_migration" RENAME COLUMN "status_name" TO "migration"`);
        await queryRunner.query(`ALTER TABLE "test_migration" RENAME COLUMN "migration" TO "status_name"`);
    }

}
