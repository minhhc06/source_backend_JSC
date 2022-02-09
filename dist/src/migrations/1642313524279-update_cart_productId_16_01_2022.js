"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCartProductId160120221642313524279 = void 0;
class updateCartProductId160120221642313524279 {
    constructor() {
        this.name = 'updateCartProductId160120221642313524279';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cart" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "UQ_371eb56ecc4104c2644711fa85f" UNIQUE ("productId")`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_371eb56ecc4104c2644711fa85f" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_371eb56ecc4104c2644711fa85f"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "UQ_371eb56ecc4104c2644711fa85f"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP COLUMN "productId"`);
    }
}
exports.updateCartProductId160120221642313524279 = updateCartProductId160120221642313524279;
//# sourceMappingURL=1642313524279-update_cart_productId_16_01_2022.js.map