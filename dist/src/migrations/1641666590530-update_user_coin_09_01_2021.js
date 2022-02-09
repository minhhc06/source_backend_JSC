"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserCoin090120211641666590530 = void 0;
class updateUserCoin090120211641666590530 {
    constructor() {
        this.name = 'updateUserCoin090120211641666590530';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "coin" integer NOT NULL DEFAULT '10'`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username")`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "coin"`);
    }
}
exports.updateUserCoin090120211641666590530 = updateUserCoin090120211641666590530;
//# sourceMappingURL=1641666590530-update_user_coin_09_01_2021.js.map