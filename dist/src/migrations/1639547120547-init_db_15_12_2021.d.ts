import { MigrationInterface, QueryRunner } from "typeorm";
export declare class initDb151220211639547120547 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
