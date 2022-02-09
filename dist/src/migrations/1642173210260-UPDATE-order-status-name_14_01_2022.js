"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATEOrderStatusName140120221642173210260 = void 0;
class UPDATEOrderStatusName140120221642173210260 {
    constructor() {
        this.name = 'UPDATEOrderStatusName140120221642173210260';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."order_statusname_enum" AS ENUM('waiting', 'success', 'payOff')`);
        await queryRunner.query(`ALTER TABLE "order" ADD "statusName" "public"."order_statusname_enum" NOT NULL DEFAULT 'waiting'`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "phone_number" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "phone_number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "statusName"`);
        await queryRunner.query(`DROP TYPE "public"."order_statusname_enum"`);
    }
}
exports.UPDATEOrderStatusName140120221642173210260 = UPDATEOrderStatusName140120221642173210260;
//# sourceMappingURL=1642173210260-UPDATE-order-status-name_14_01_2022.js.map