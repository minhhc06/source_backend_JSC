import { MigrationInterface, QueryRunner } from "typeorm";
export declare class createInvoiceTable211220211640101226393 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
