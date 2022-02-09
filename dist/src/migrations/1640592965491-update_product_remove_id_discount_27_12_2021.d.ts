import { MigrationInterface, QueryRunner } from "typeorm";
export declare class updateProductRemoveIdDiscount271220211640592965491 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
