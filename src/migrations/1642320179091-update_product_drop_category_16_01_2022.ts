import {MigrationInterface, QueryRunner} from "typeorm";

export class updateProductDropCategory160120221642320179091 implements MigrationInterface {
    name = 'updateProductDropCategory160120221642320179091'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "category"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "category" character varying NOT NULL`);
    }

}
