import {MigrationInterface, QueryRunner} from "typeorm";

export class createGiftTable211220211640102040419 implements MigrationInterface {
    name = 'createGiftTable211220211640102040419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "gift" ("id" SERIAL NOT NULL, "id_user" integer NOT NULL, "id_product" integer NOT NULL, "price" integer NOT NULL, "discount" double precision, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_f91217caddc01a085837ebe0606" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "gift"`);
    }

}
