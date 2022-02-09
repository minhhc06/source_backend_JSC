"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserEmail090120211641700889714 = void 0;
class updateUserEmail090120211641700889714 {
    constructor() {
        this.name = 'updateUserEmail090120211641700889714';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "phone_number" TO "email"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "email" TO "phone_number"`);
    }
}
exports.updateUserEmail090120211641700889714 = updateUserEmail090120211641700889714;
//# sourceMappingURL=1641700889714-update_user_email_09_01_2021.js.map