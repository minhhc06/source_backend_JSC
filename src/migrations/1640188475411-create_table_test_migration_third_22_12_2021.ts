import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableTestMigrationThird221220211640188475411 implements MigrationInterface {
    name = 'createTableTestMigrationThird221220211640188475411'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test_migration_third" ("id" SERIAL NOT NULL, "migration_third" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_99d3cb7ed059a7c318f68485bbf" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "test_migration_third"`);
    }

}
