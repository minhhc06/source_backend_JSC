import {MigrationInterface, QueryRunner} from "typeorm";

export class updateTableDiscount221220211640185058887 implements MigrationInterface {
    name = 'updateTableDiscount221220211640185058887'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "discount" ADD "name_discount" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "name_discount"`);
    }

}
