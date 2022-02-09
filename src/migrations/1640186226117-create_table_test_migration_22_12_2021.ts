import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableTestMigration221220211640186226117 implements MigrationInterface {
    name = 'createTableTestMigration221220211640186226117'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test_migration" ("id" SERIAL NOT NULL, "status_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_e328d012814f2a2d732f882e9af" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "test_migration"`);
    }

}
