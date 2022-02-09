"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editOrderNullable130120221642083874538 = void 0;
class editOrderNullable130120221642083874538 {
    constructor() {
        this.name = 'editOrderNullable130120221642083874538';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "delivery_date" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "note" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "note" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "delivery_date" SET NOT NULL`);
    }
}
exports.editOrderNullable130120221642083874538 = editOrderNullable130120221642083874538;
//# sourceMappingURL=1642083874538-edit_order_nullable_13_01_2022.js.map