import { StatusOrder } from 'src/order/dto/create-order.dto';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';
import { User } from './user.entity';
@Entity()
export class OrderItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @Column()
    total: number;

    @Column({type: 'enum', enum: StatusOrder, default: StatusOrder.PROCESSING})
    statusName: StatusOrder;

    @Column({nullable: true})
    reason_fail: string;

    @ManyToOne(() => Order, order => order.orderItems)
    order: Order;
    
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

    // @OneToOne(() => Product, product => product.orderItem) 
    // @JoinColumn()
    // product: Product;

    @ManyToOne(() => Product, product => product.orderItem) 
    product: Product;

    @ManyToOne(() => User, user => user.orderItem) 
    user: User;

}