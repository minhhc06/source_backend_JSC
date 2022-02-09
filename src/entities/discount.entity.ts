import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Product } from './product.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Discount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_product: number;

  @Column()
  discount: number;

  @Column('varchar', { nullable: true })
  name_discount: string;

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

  // @ManyToOne((_tpye) =>product, (productModel) => productModel.id, {eager: false})
  // @Exclude({ toPlainOnly: true})
  // productModel: product

  @ManyToOne(() => Product, (productModel) => productModel.discounts)
  product: Product;

  // @OneToMany(() => product, productModel => productModel.discountModel)
  // @JoinColumn({ name: 'id_product' })
  // productModel: product;
}
