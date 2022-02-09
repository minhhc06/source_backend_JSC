import {MigrationInterface, QueryRunner} from "typeorm";

export class updateNameReceiver240120211642993750824 implements MigrationInterface {
    name = 'updateNameReceiver240120211642993750824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" RENAME COLUMN "name_reciever" TO "name_receiver"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" RENAME COLUMN "name_receiver" TO "name_reciever"`);
    }

}
