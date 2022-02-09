import { BadRequestException } from "@nestjs/common";
import { Product } from "src/entities/product.entity";
import { EntityRepository, Repository } from "typeorm";
import { DetailProductDto } from "./dto/detail-product.dto";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    async detailProductRepository(id: number) : Promise<Product>{
        
         const productResult = await this.findOne({
            id: id,
        });
      
        if(productResult){
            const query = this
            .createQueryBuilder('product')
            .select([
              'product.id',
              'product.name',
              'product.price',
              'product.quantity',
            ])
            .leftJoinAndSelect('product.discounts', 'discount')
            .leftJoinAndSelect('product.productImages', 'productImage')
            .addSelect([
              'productImage.id',
              'productImage.url',
              'discount.discount',
              'discount.name_discount',
            ]).orderBy('product.id', 'DESC');

            return productResult;
        }else{
            throw new BadRequestException('Product not found');
        }
        
      }
      
}