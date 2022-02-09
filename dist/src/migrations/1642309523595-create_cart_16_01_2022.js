"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCart160120221642309523595 = void 0;
class createCart160120221642309523595 {
    constructor() {
        this.name = 'createCart160120221642309523595';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "cart" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "cart"`);
    }
}
exports.createCart160120221642309523595 = createCart160120221642309523595;
//# sourceMappingURL=1642309523595-create_cart_16_01_2022.js.map