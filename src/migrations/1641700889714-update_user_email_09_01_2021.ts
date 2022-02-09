import {MigrationInterface, QueryRunner} from "typeorm";

export class updateUserEmail090120211641700889714 implements MigrationInterface {
    name = 'updateUserEmail090120211641700889714'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "phone_number" TO "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "email" TO "phone_number"`);
    }

}
