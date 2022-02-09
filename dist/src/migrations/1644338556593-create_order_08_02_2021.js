"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder080220211644338556593 = void 0;
class createOrder080220211644338556593 {
    constructor() {
        this.name = 'createOrder080220211644338556593';
    }
    async up(queryRunner) {
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
    async down(queryRunner) {
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
exports.createOrder080220211644338556593 = createOrder080220211644338556593;
//# sourceMappingURL=1644338556593-create_order_08_02_2021.js.map