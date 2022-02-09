import { MigrationInterface, QueryRunner } from "typeorm";
export declare class fixDb1641744615950 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
