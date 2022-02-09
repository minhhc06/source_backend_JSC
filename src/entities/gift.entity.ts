import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity()
export class Gift {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    id_user: number;

    @Column()
    id_product: number;

    @Column()
    price: number;

    @Column('float',{nullable: true})
    discount: number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;


}