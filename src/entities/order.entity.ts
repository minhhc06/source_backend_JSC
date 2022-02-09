import { StatusOrder } from 'src/order/dto/create-order.dto';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { Invoice } from './invoice.entity';
import { OrderItem } from './order_item.entity';
import { Product } from './product.entity';
import { User } from './user.entity';
@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    total: number;

    @Column({nullable: true})
    delivery_date: Date;

    @Column({nullable: true})
    note: string;

    // @Column('integer',{nullable: true})
    @Column()
    phone_number: string;

    @Column()
    name_receiver: string;

    @Column({type: 'enum', enum: StatusOrder, default: StatusOrder.PROCESSING})
    statusName: string;

    @Column()
    city: string;

    @Column()
    district: string;

    @Column()
    ward: string;
    
    @Column()
    address: string;
    
    @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
    orderItems: OrderItem[];

    @OneToMany(() => Invoice, (invoice) => invoice.order)
    invoice: Invoice[];

    @ManyToOne(() => User, (user) => user.order)
    user: User;

    @ManyToOne(() => Product, (product) => product.order)
    product: Product;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

    @Column('int4',{default: 1})
    quantity: number;

    @Column('int4',{default: 0})
    price: number;


}