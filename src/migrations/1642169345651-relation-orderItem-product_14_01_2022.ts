import {MigrationInterface, QueryRunner} from "typeorm";

export class relationOrderItemProduct140120221642169345651 implements MigrationInterface {
    name = 'relationOrderItemProduct140120221642169345651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_item" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "UQ_904370c093ceea4369659a3c810" UNIQUE ("productId")`);
        await queryRunner.query(`ALTER TABLE "product" ADD "orderItemId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_5f2592aee3ed4989c57dae960ea" UNIQUE ("orderItemId")`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_904370c093ceea4369659a3c810" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_5f2592aee3ed4989c57dae960ea" FOREIGN KEY ("orderItemId") REFERENCES "order_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_5f2592aee3ed4989c57dae960ea"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_5f2592aee3ed4989c57dae960ea"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "orderItemId"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "UQ_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "productId"`);
    }

}
