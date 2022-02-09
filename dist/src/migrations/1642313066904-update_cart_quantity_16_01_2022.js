"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCartQuantity160120221642313066904 = void 0;
class updateCartQuantity160120221642313066904 {
    constructor() {
        this.name = 'updateCartQuantity160120221642313066904';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cart" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "quantity" SET DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_756f53ab9466eb52a52619ee019" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_756f53ab9466eb52a52619ee019"`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "quantity" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "cart" DROP COLUMN "userId"`);
    }
}
exports.updateCartQuantity160120221642313066904 = updateCartQuantity160120221642313066904;
//# sourceMappingURL=1642313066904-update_cart_quantity_16_01_2022.js.map