"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixUpdateStatusOrderItem030220221643904100463 = void 0;
class fixUpdateStatusOrderItem030220221643904100463 {
    constructor() {
        this.name = 'fixUpdateStatusOrderItem030220221643904100463';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_item" ADD "reason_fail" character varying`);
        await queryRunner.query(`ALTER TYPE "public"."order_statusname_enum" RENAME TO "order_statusname_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."order_statusname_enum" AS ENUM('proccessing', 'done')`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" TYPE "public"."order_statusname_enum" USING "statusName"::"text"::"public"."order_statusname_enum"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" SET DEFAULT 'proccessing'`);
        await queryRunner.query(`DROP TYPE "public"."order_statusname_enum_old"`);
        await queryRunner.query(`ALTER TYPE "public"."order_item_statusname_enum" RENAME TO "order_item_statusname_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."order_item_statusname_enum" AS ENUM('proccessing', 'onDelivering', 'payOff', 'failed')`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "statusName" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "statusName" TYPE "public"."order_item_statusname_enum" USING "statusName"::"text"::"public"."order_item_statusname_enum"`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "statusName" SET DEFAULT 'proccessing'`);
        await queryRunner.query(`DROP TYPE "public"."order_item_statusname_enum_old"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."order_item_statusname_enum_old" AS ENUM('processing', 'onDelivering', 'payOff', 'failed')`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "statusName" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "statusName" TYPE "public"."order_item_statusname_enum_old" USING "statusName"::"text"::"public"."order_item_statusname_enum_old"`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "statusName" SET DEFAULT 'processing'`);
        await queryRunner.query(`DROP TYPE "public"."order_item_statusname_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."order_item_statusname_enum_old" RENAME TO "order_item_statusname_enum"`);
        await queryRunner.query(`CREATE TYPE "public"."order_statusname_enum_old" AS ENUM('processing', 'done')`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" TYPE "public"."order_statusname_enum_old" USING "statusName"::"text"::"public"."order_statusname_enum_old"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" SET DEFAULT 'processing'`);
        await queryRunner.query(`DROP TYPE "public"."order_statusname_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."order_statusname_enum_old" RENAME TO "order_statusname_enum"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "reason_fail"`);
    }
}
exports.fixUpdateStatusOrderItem030220221643904100463 = fixUpdateStatusOrderItem030220221643904100463;
//# sourceMappingURL=1643904100463-fix_update_status_order_item_03_02_2022.js.map