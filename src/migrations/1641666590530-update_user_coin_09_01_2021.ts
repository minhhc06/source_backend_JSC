import {MigrationInterface, QueryRunner} from "typeorm";

export class updateUserCoin090120211641666590530 implements MigrationInterface {
    name = 'updateUserCoin090120211641666590530'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "coin" integer NOT NULL DEFAULT '10'`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username")`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "coin"`);
    }

}
