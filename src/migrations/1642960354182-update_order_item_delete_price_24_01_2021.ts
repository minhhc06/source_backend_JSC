import {MigrationInterface, QueryRunner} from "typeorm";

export class updateOrderItemDeletePrice240120211642960354182 implements MigrationInterface {
    name = 'updateOrderItemDeletePrice240120211642960354182'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "price"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_item" ADD "price" integer NOT NULL`);
    }

}
