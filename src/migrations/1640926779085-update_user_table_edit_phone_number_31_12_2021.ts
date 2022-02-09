import {MigrationInterface, QueryRunner} from "typeorm";

export class updateUserTableEditPhoneNumber311220211640926779085 implements MigrationInterface {
    name = 'updateUserTableEditPhoneNumber311220211640926779085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "discount" DROP CONSTRAINT "FK_d9340bdcdd67f7075deb1507272"`);
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "productModelId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phone_number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "discount" ADD CONSTRAINT "FK_b08d6b007dd6852f4f25d054b9f" FOREIGN KEY ("id_product") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "discount" DROP CONSTRAINT "FK_b08d6b007dd6852f4f25d054b9f"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phone_number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "discount" ADD "productModelId" integer`);
        await queryRunner.query(`ALTER TABLE "discount" ADD CONSTRAINT "FK_d9340bdcdd67f7075deb1507272" FOREIGN KEY ("productModelId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
