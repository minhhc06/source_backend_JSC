"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editOrder130120221642082827281 = void 0;
class editOrder130120221642082827281 {
    constructor() {
        this.name = 'editOrder130120221642082827281';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "id_order"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "id_product"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "id_user"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order" ADD "id_user" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD "id_product" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD "id_order" integer NOT NULL`);
    }
}
exports.editOrder130120221642082827281 = editOrder130120221642082827281;
//# sourceMappingURL=1642082827281-edit_order_13_01_2022.js.map