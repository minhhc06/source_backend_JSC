import {MigrationInterface, QueryRunner} from "typeorm";

export class updateUserUsername010120211641057504536 implements MigrationInterface {
    name = 'updateUserUsername010120211641057504536'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_78a916df40e02a9deb1c4b75ed" ON "user" ("username") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_78a916df40e02a9deb1c4b75ed"`);
    }

}
