import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { Discount } from './discount.entity';
import { Exclude } from 'class-transformer';
import { ProductImage } from './product_image.entity';
import { ProductCategory } from './product_category.entity';
import { OrderItem } from './order_item.entity';
import { Cart } from './cart.entity';
import { Order } from './order.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column('varchar', { nullable: true })
  about: string;

  @Column('varchar', { nullable: true })
  brand: string;

  @Column('varchar', { nullable: true })
  material: string;

  @Column('varchar', { nullable: true })
  made_in: string;

  @Column()
  expiry: Date;

  @Column('varchar', { nullable: true })
  preserve: string;

  @Column('varchar', { nullable: true })
  type_skin: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;

  @OneToMany(() => Discount, (discountModel) => discountModel.product)
  discounts: Discount[];

  @OneToMany(() => ProductImage, (productImage) => productImage.product)
  productImages: ProductImage[];

  @ManyToOne(() => ProductCategory, (productCategory) => productCategory.product)
  productCategory: ProductCategory;

  
  @OneToOne(() => OrderItem, orderItem => orderItem.product) 
  @JoinColumn()
  orderItem: OrderItem;

  @OneToOne(() => Order, order => order.product) 
  @JoinColumn()
  order: Order;

  @OneToOne(() => Cart, (cart) => cart.product)
  cart: Cart;

}
