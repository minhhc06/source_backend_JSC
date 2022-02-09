import {MigrationInterface, QueryRunner} from "typeorm";

export class editOrder130120221642082827281 implements MigrationInterface {
    name = 'editOrder130120221642082827281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "id_order"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "id_product"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "id_user"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ADD "id_user" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD "id_product" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD "id_order" integer NOT NULL`);
    }

}
