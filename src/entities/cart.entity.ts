import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Product } from './product.entity';
import { User } from './user.entity';
@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int4',{default: 1})
    quantity: number;

    @ManyToOne(() => Product, product => product.cart)
    product: Product;

    @ManyToOne(() => User, (user) => user.cart)
    user: User;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;


}