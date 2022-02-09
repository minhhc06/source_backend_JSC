import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UPDATEOrderStatusName140120221642173210260 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
