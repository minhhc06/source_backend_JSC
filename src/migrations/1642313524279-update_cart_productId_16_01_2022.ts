import {MigrationInterface, QueryRunner} from "typeorm";

export class updateCartProductId160120221642313524279 implements MigrationInterface {
    name = 'updateCartProductId160120221642313524279'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "UQ_371eb56ecc4104c2644711fa85f" UNIQUE ("productId")`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_371eb56ecc4104c2644711fa85f" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_371eb56ecc4104c2644711fa85f"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "UQ_371eb56ecc4104c2644711fa85f"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP COLUMN "productId"`);
    }

}
