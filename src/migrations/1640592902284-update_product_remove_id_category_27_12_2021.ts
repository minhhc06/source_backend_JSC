import {MigrationInterface, QueryRunner} from "typeorm";

export class updateProductRemoveIdCategory271220211640592902284 implements MigrationInterface {
    name = 'updateProductRemoveIdCategory271220211640592902284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "id_product_category"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "id_product_category" integer NOT NULL`);
    }

}
