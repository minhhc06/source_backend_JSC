import {MigrationInterface, QueryRunner} from "typeorm";

export class updateProductCategory271220211640590649560 implements MigrationInterface {
    name = 'updateProductCategory271220211640590649560'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "category" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "category"`);
    }

}
