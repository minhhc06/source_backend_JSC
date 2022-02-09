import {MigrationInterface, QueryRunner} from "typeorm";

export class createOrder080220211644338556593 implements MigrationInterface {
    name = 'createOrder080220211644338556593'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ADD "price" integer NOT NULL`);
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
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
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "price"`);
    }

}
