"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct130120221642079541590 = void 0;
class updateProduct130120221642079541590 {
    constructor() {
        this.name = 'updateProduct130120221642079541590';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" ADD "productCategoryId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_618194d24a7ea86a165d7ec628e" FOREIGN KEY ("productCategoryId") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_618194d24a7ea86a165d7ec628e"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "productCategoryId"`);
    }
}
exports.updateProduct130120221642079541590 = updateProduct130120221642079541590;
//# sourceMappingURL=1642079541590-update_product_13_01_2022.js.map