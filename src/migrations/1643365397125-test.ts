import {MigrationInterface, QueryRunner} from "typeorm";

export class test1643365397125 implements MigrationInterface {
    name = 'test1643365397125'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`CREATE TABLE "history_coin" ("id" SERIAL NOT NULL, "id_user" integer NOT NULL, "coin" integer NOT NULL DEFAULT '10', "test" integer DEFAULT '10', "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_8fecd185d61db33ff6db6ce53f1" PRIMARY KEY ("id"))`);
 
        // await queryRunner.query(`ALTER TABLE "history_coin" ADD CONSTRAINT "FK_335b706bde202553b807f4c083a" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`ALTER TABLE "history_coin" DROP CONSTRAINT "FK_335b706bde202553b807f4c083a"`);
        // await queryRunner.query(`DROP TABLE "history_coin"`);
    }

}
