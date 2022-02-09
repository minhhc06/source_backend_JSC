import {MigrationInterface, QueryRunner} from "typeorm";

export class createOrderQuantity080220211644340438279 implements MigrationInterface {
    name = 'createOrderQuantity080220211644340438279'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ADD "quantity" integer NOT NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "order" ADD "price" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "order" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD "orderId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_87ffe09e725a6e79f87dd6c0b69" UNIQUE ("orderId")`);
        await queryRunner.query(`ALTER TYPE "public"."order_statusname_enum_old_old" RENAME TO "order_statusname_enum_old_old_old"`);
        await queryRunner.query(`CREATE TYPE "public"."order_statusname_enum" AS ENUM('processing', 'onDelivering', 'success', 'payOff', 'failed')`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" TYPE "public"."order_statusname_enum" USING "statusName"::"text"::"public"."order_statusname_enum"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" SET DEFAULT 'processing'`);
        await queryRunner.query(`DROP TYPE "public"."order_statusname_enum_old_old_old"`);
        await queryRunner.query(`ALTER TYPE "public"."order_item_statusname_enum_old_old" RENAME TO "order_item_statusname_enum_old_old_old"`);
        await queryRunner.query(`CREATE TYPE "public"."order_item_statusname_enum" AS ENUM('processing', 'onDelivering', 'success', 'payOff', 'failed')`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "statusName" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "statusName" TYPE "public"."order_item_statusname_enum" USING "statusName"::"text"::"public"."order_item_statusname_enum"`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "statusName" SET DEFAULT 'processing'`);
        await queryRunner.query(`DROP TYPE "public"."order_item_statusname_enum_old_old_old"`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_88991860e839c6153a7ec878d39" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_87ffe09e725a6e79f87dd6c0b69" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_87ffe09e725a6e79f87dd6c0b69"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_88991860e839c6153a7ec878d39"`);
        await queryRunner.query(`CREATE TYPE "public"."order_item_statusname_enum_old_old_old" AS ENUM('processing', 'onDelivering', 'payOff', 'failed')`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "statusName" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "statusName" TYPE "public"."order_item_statusname_enum_old_old_old" USING "statusName"::"text"::"public"."order_item_statusname_enum_old_old_old"`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "statusName" SET DEFAULT 'processing'`);
        await queryRunner.query(`DROP TYPE "public"."order_item_statusname_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."order_item_statusname_enum_old_old_old" RENAME TO "order_item_statusname_enum_old_old"`);
        await queryRunner.query(`CREATE TYPE "public"."order_statusname_enum_old_old_old" AS ENUM('processing', 'onDelivering', 'payOff')`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" TYPE "public"."order_statusname_enum_old_old_old" USING "statusName"::"text"::"public"."order_statusname_enum_old_old_old"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" SET DEFAULT 'processing'`);
        await queryRunner.query(`DROP TYPE "public"."order_statusname_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."order_statusname_enum_old_old_old" RENAME TO "order_statusname_enum_old_old"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_87ffe09e725a6e79f87dd6c0b69"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "quantity"`);
    }

}
