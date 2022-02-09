import {MigrationInterface, QueryRunner} from "typeorm";

export class updateDiscountAddIdProduct271220211640621225126 implements MigrationInterface {
    name = 'updateDiscountAddIdProduct271220211640621225126'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "discount" ADD "id_product" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "discount" ADD "productModelId" integer`);
        await queryRunner.query(`ALTER TABLE "discount" ADD CONSTRAINT "FK_d9340bdcdd67f7075deb1507272" FOREIGN KEY ("productModelId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "discount" DROP CONSTRAINT "FK_d9340bdcdd67f7075deb1507272"`);
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "productModelId"`);
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "id_product"`);
    }

}
