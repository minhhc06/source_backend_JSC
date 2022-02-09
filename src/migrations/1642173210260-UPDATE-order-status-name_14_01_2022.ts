import {MigrationInterface, QueryRunner} from "typeorm";

export class UPDATEOrderStatusName140120221642173210260 implements MigrationInterface {
    name = 'UPDATEOrderStatusName140120221642173210260'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."order_statusname_enum" AS ENUM('waiting', 'success', 'payOff')`);
        await queryRunner.query(`ALTER TABLE "order" ADD "statusName" "public"."order_statusname_enum" NOT NULL DEFAULT 'waiting'`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "phone_number" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "phone_number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "statusName"`);
        await queryRunner.query(`DROP TYPE "public"."order_statusname_enum"`);
    }
}
