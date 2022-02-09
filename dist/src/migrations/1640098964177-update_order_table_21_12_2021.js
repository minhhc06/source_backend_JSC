"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderTable211220211640098964177 = void 0;
class updateOrderTable211220211640098964177 {
    constructor() {
        this.name = 'updateOrderTable211220211640098964177';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order" ADD "name_reciever" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "phone_number" SET NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "phone_number" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "name_reciever"`);
    }
}
exports.updateOrderTable211220211640098964177 = updateOrderTable211220211640098964177;
//# sourceMappingURL=1640098964177-update_order_table_21_12_2021.js.map