"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNameReceiver240120211642993750824 = void 0;
class updateNameReceiver240120211642993750824 {
    constructor() {
        this.name = 'updateNameReceiver240120211642993750824';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order" RENAME COLUMN "name_reciever" TO "name_receiver"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order" RENAME COLUMN "name_receiver" TO "name_reciever"`);
    }
}
exports.updateNameReceiver240120211642993750824 = updateNameReceiver240120211642993750824;
//# sourceMappingURL=1642993750824-update_name_receiver_24_01_2021.js.map