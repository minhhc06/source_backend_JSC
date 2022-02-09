import {MigrationInterface, QueryRunner} from "typeorm";

export class updateTableTestMigrationSecond221220211640187695331 implements MigrationInterface {
    name = 'updateTableTestMigrationSecond221220211640187695331'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test_migration_second" ("id" SERIAL NOT NULL, "migration" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_549cc3808fc191740f6e3ddf3e0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "test_migration" DROP COLUMN "migration"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test_migration" ADD "migration" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "test_migration_second"`);
    }

}
