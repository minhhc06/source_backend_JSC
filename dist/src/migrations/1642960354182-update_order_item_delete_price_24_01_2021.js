"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderItemDeletePrice240120211642960354182 = void 0;
class updateOrderItemDeletePrice240120211642960354182 {
    constructor() {
        this.name = 'updateOrderItemDeletePrice240120211642960354182';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "price"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_item" ADD "price" integer NOT NULL`);
    }
}
exports.updateOrderItemDeletePrice240120211642960354182 = updateOrderItemDeletePrice240120211642960354182;
//# sourceMappingURL=1642960354182-update_order_item_delete_price_24_01_2021.js.map