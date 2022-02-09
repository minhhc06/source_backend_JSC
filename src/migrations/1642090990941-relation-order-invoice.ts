import {MigrationInterface, QueryRunner} from "typeorm";

export class relationOrderInvoice1642090990941 implements MigrationInterface {
    name = 'relationOrderInvoice1642090990941'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoice" RENAME COLUMN "id_order" TO "orderId"`);
        await queryRunner.query(`ALTER TABLE "invoice" ALTER COLUMN "orderId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "invoice" ADD CONSTRAINT "FK_f494ce6746b91e9ec9562af4857" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoice" DROP CONSTRAINT "FK_f494ce6746b91e9ec9562af4857"`);
        await queryRunner.query(`ALTER TABLE "invoice" ALTER COLUMN "orderId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "invoice" RENAME COLUMN "orderId" TO "id_order"`);
    }

}
