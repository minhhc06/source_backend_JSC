"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStatusOrderItem030220221643870776500 = void 0;
class updateStatusOrderItem030220221643870776500 {
    constructor() {
        this.name = 'updateStatusOrderItem030220221643870776500';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."order_item_statusname_enum" AS ENUM('processing', 'onDelivering', 'payOff', 'failed')`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD "statusName" "public"."order_item_statusname_enum" NOT NULL DEFAULT 'processing'`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD "userId" integer`);
        await queryRunner.query(`ALTER TYPE "public"."order_statusname_enum" RENAME TO "order_statusname_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."order_statusname_enum" AS ENUM('processing', 'done')`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" TYPE "public"."order_statusname_enum" USING "statusName"::"text"::"public"."order_statusname_enum"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" SET DEFAULT 'processing'`);
        await queryRunner.query(`DROP TYPE "public"."order_statusname_enum_old"`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_845716d96530a440c6cdc6c7346" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_845716d96530a440c6cdc6c7346"`);
        await queryRunner.query(`CREATE TYPE "public"."order_statusname_enum_old" AS ENUM('processing', 'onDelivering', 'payOff')`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" TYPE "public"."order_statusname_enum_old" USING "statusName"::"text"::"public"."order_statusname_enum_old"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "statusName" SET DEFAULT 'processing'`);
        await queryRunner.query(`DROP TYPE "public"."order_statusname_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."order_statusname_enum_old" RENAME TO "order_statusname_enum"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "statusName"`);
        await queryRunner.query(`DROP TYPE "public"."order_item_statusname_enum"`);
    }
}
exports.updateStatusOrderItem030220221643870776500 = updateStatusOrderItem030220221643870776500;
//# sourceMappingURL=1643870776500-update_status_order_item_03_02_2022.js.map