import { MigrationInterface, QueryRunner } from "typeorm";
export declare class updateUserUsername010120211641057504536 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
