import {MigrationInterface, QueryRunner} from "typeorm";

export class updateProduct130120221642079541590 implements MigrationInterface {
    name = 'updateProduct130120221642079541590'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "productCategoryId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_618194d24a7ea86a165d7ec628e" FOREIGN KEY ("productCategoryId") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_618194d24a7ea86a165d7ec628e"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "productCategoryId"`);
    }

}
