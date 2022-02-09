"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserUsername010120211641057504536 = void 0;
class updateUserUsername010120211641057504536 {
    constructor() {
        this.name = 'updateUserUsername010120211641057504536';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_78a916df40e02a9deb1c4b75ed" ON "user" ("username") `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_78a916df40e02a9deb1c4b75ed"`);
    }
}
exports.updateUserUsername010120211641057504536 = updateUserUsername010120211641057504536;
//# sourceMappingURL=1641057504536-update_user_username_01_01_2021.js.map