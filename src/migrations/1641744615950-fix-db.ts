import {MigrationInterface, QueryRunner} from "typeorm";

export class fixDb1641744615950 implements MigrationInterface {
    name = 'fixDb1641744615950'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "discount" DROP CONSTRAINT "FK_b08d6b007dd6852f4f25d054b9f"`);
        await queryRunner.query(`ALTER TABLE "product_image" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "discount" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "product_image" ADD CONSTRAINT "FK_40ca0cd115ef1ff35351bed8da2" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "discount" ADD CONSTRAINT "FK_63f33bfcb610459080764863792" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "discount" DROP CONSTRAINT "FK_63f33bfcb610459080764863792"`);
        await queryRunner.query(`ALTER TABLE "product_image" DROP CONSTRAINT "FK_40ca0cd115ef1ff35351bed8da2"`);
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "product_image" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "discount" ADD CONSTRAINT "FK_b08d6b007dd6852f4f25d054b9f" FOREIGN KEY ("id_product") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
