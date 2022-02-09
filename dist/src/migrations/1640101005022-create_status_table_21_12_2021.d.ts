import { MigrationInterface, QueryRunner } from "typeorm";
export declare class createStatusTable211220211640101005022 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
