import {MigrationInterface, QueryRunner} from "typeorm";

export class updateOrderTable211220211640098964177 implements MigrationInterface {
    name = 'updateOrderTable211220211640098964177'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ADD "name_reciever" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "phone_number" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "phone_number" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "name_reciever"`);
    }

}
