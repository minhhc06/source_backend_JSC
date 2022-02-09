import {MigrationInterface, QueryRunner} from "typeorm";

export class updateProduct271220211640580519261 implements MigrationInterface {
    name = 'updateProduct271220211640580519261'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "about" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "brand" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "material" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "made_in" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "preserve" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "type_skin" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "type_skin" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "preserve" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "made_in" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "material" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "brand" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "about" SET NOT NULL`);
    }

}
