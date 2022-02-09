"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relationOrderUser150120221642245846199 = void 0;
class relationOrderUser150120221642245846199 {
    constructor() {
        this.name = 'relationOrderUser150120221642245846199';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "userId"`);
    }
}
exports.relationOrderUser150120221642245846199 = relationOrderUser150120221642245846199;
//# sourceMappingURL=1642245846199-relation_order_user_15_01_2022.js.map