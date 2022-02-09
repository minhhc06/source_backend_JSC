import { MigrationInterface, QueryRunner } from "typeorm";
export declare class updateOrderStatus280120211643367053770 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
