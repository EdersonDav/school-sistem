import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePeapleTable1646781269839 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'peaple',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy:'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'first_name',
                        type:'varchar'
                    },
                    {
                        name: 'last_name',
                        type:'varchar'
                    },
                    {
                        name:'email',
                        type:'varchar',
                        isUnique: true
                    },
                    {
                        name:'gender',
                        type:'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('peaple')
    }

}
