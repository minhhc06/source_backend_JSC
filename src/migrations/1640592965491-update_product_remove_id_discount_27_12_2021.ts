import {MigrationInterface, QueryRunner} from "typeorm";

export class updateProductRemoveIdDiscount271220211640592965491 implements MigrationInterface {
    name = 'updateProductRemoveIdDiscount271220211640592965491'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "id_discount"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "id_discount" integer NOT NULL`);
    }

}
