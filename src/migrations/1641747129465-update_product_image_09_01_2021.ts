import {MigrationInterface, QueryRunner} from "typeorm";

export class updateProductImage090120211641747129465 implements MigrationInterface {
    name = 'updateProductImage090120211641747129465'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_image" DROP COLUMN "id_product"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_image" ADD "id_product" integer NOT NULL`);
    }

}
