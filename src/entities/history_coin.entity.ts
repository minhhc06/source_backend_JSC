import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
@Entity()
export class HistoryCoin {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    id_user: number;

    @Column('int4',{default: 10})
    coin: number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

    @ManyToOne(() => User, user => user.histories)
    @JoinColumn({ name: 'id_user' })
    user: User;

}