import {MigrationInterface, QueryRunner} from "typeorm";

export class cart1642315902444 implements MigrationInterface {
    name = 'cart1642315902444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_371eb56ecc4104c2644711fa85f"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "UQ_371eb56ecc4104c2644711fa85f"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "cartId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_2ca008a558fe6002e3309f8f1d7" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_2ca008a558fe6002e3309f8f1d7"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "cartId"`);
        await queryRunner.query(`ALTER TABLE "cart" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "UQ_371eb56ecc4104c2644711fa85f" UNIQUE ("productId")`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_371eb56ecc4104c2644711fa85f" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
