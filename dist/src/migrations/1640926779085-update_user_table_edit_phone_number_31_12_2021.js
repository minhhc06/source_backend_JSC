"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserTableEditPhoneNumber311220211640926779085 = void 0;
class updateUserTableEditPhoneNumber311220211640926779085 {
    constructor() {
        this.name = 'updateUserTableEditPhoneNumber311220211640926779085';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "discount" DROP CONSTRAINT "FK_d9340bdcdd67f7075deb1507272"`);
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "productModelId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phone_number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "discount" ADD CONSTRAINT "FK_b08d6b007dd6852f4f25d054b9f" FOREIGN KEY ("id_product") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "discount" DROP CONSTRAINT "FK_b08d6b007dd6852f4f25d054b9f"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phone_number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "discount" ADD "productModelId" integer`);
        await queryRunner.query(`ALTER TABLE "discount" ADD CONSTRAINT "FK_d9340bdcdd67f7075deb1507272" FOREIGN KEY ("productModelId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.updateUserTableEditPhoneNumber311220211640926779085 = updateUserTableEditPhoneNumber311220211640926779085;
//# sourceMappingURL=1640926779085-update_user_table_edit_phone_number_31_12_2021.js.map