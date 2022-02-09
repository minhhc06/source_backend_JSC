import {MigrationInterface, QueryRunner} from "typeorm";

export class editOrderNullable130120221642083874538 implements MigrationInterface {
    name = 'editOrderNullable130120221642083874538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "delivery_date" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "note" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "note" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "delivery_date" SET NOT NULL`);
    }

}
