"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderStatus280120211643367053770 = void 0;
class updateOrderStatus280120211643367053770 {
    constructor() {
        this.name = 'updateOrderStatus280120211643367053770';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "history_coin" DROP COLUMN "test"`);
        await queryRunner.query(`ALTER TYPE "public"."order_statusname_enum" RENAME TO "order_statusname_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."order_statusname_enum" AS ENUM('processing', 'onDelivering', 'payOff')`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" TYPE "public"."order_statusname_enum" USING "statusName"::"text"::"public"."order_statusname_enum"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" SET DEFAULT 'processing'`);
        await queryRunner.query(`DROP TYPE "public"."order_statusname_enum_old"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."order_statusname_enum_old" AS ENUM('waiting', 'success', 'payOff')`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" TYPE "public"."order_statusname_enum_old" USING "statusName"::"text"::"public"."order_statusname_enum_old"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" SET DEFAULT 'waiting'`);
        await queryRunner.query(`DROP TYPE "public"."order_statusname_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."order_statusname_enum_old" RENAME TO "order_statusname_enum"`);
        await queryRunner.query(`ALTER TABLE "history_coin" ADD "test" integer DEFAULT '10'`);
    }
}
exports.updateOrderStatus280120211643367053770 = updateOrderStatus280120211643367053770;
//# sourceMappingURL=1643367053770-update_order_status_28_01_2021.js.map