import { HttpException, HttpStatus, InternalServerErrorException } from "@nestjs/common";
import { ProductCategory } from "src/entities/product_category.entity";
import { User } from "src/entities/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateProductCategoryDto } from "./dto/create-product-category.dto";

@EntityRepository(ProductCategory)
export class ProductCategoryRepository extends Repository<ProductCategory> {
    async createProductCategory(user: User, createProductCategoryDto: CreateProductCategoryDto): Promise<ProductCategory>{
        const { name } = createProductCategoryDto;

        const order = this.create({name });
        
         try{
           return await this.save(order);
         }catch(error){
             console.log(error.code);
             if (error.message.includes('unique constraint'))
        throw new HttpException('error!', HttpStatus.BAD_REQUEST);
             
         }
    }

    async getProductCategory(): Promise<ProductCategory[]>{
        
        const query = this.createQueryBuilder('product_category');
       
          try {
            const productCategories = await query.getMany();
            return productCategories;
            
          } catch (error) {
            throw new InternalServerErrorException();
          }
    }

}