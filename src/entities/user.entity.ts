import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index, OneToMany} from 'typeorm';
import { Cart } from './cart.entity';
import { HistoryCoin } from './history_coin.entity';
import { Order } from './order.entity';
import { OrderItem } from './order_item.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fullname: string;
  @Index({ unique: true })
  @Column('varchar')
  username: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column()
  city: string;
  @Column()
  district: string;
  @Column()
  ward: string;
  @Column()
  address: string;
  @Column()
  avatar: string;

  // @Column('varchar',{nullable: true})
  // address: string;
  // @Column('varchar',{nullable: true})
  // email: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;

  @Column('int4',{default: 10})
  coin: number;

  @OneToMany(() => HistoryCoin, histories => histories.user)
  histories: HistoryCoin[];

  @OneToMany(() => Order, order => order.user)
  order: Order[];

  @OneToMany(() => Cart, (cart) => cart.user)
  cart: Cart[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.user)
  orderItem: OrderItem[];

}