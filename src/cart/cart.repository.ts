import { HttpException, HttpStatus, InternalServerErrorException } from "@nestjs/common";
import { Cart } from "src/entities/cart.entity";
import { Product } from "src/entities/product.entity";
import { User } from "src/entities/user.entity";
import { EntityRepository, In, Repository } from "typeorm";
import { CreateCartDto } from "./dto/create-cart.dto";
import { DeleteCartDto } from "./dto/delete-cart.dto";

@EntityRepository(Cart)
export class CartRepository extends Repository<Cart> {
    async createCart(user: User, product: Product): Promise<Cart>{
       const order = this.create({user, product, });
       
        try{
          return await this.save(order);
        }catch(error){
            console.log(error.code);
            if (error.message.includes('unique constraint'))
       throw new HttpException('error!', HttpStatus.BAD_REQUEST);
            
        }
   }

   async countTotalCart(userId: number): Promise<number> {
    const query = this.createQueryBuilder('cart');
    query.innerJoinAndSelect(
        'cart.user',
        'user',
        'cart.userId = :userId',
        { userId },
      );

      console.log('qeury ne ' + query);


    try {
        const carts = await query.getMany();
        return carts.length;
        
      } catch (error) {
      
        throw new InternalServerErrorException();
      }

}



   async updateCart(user: User,createCartDto: CreateCartDto, cart: Cart): Promise<Cart>{
    const { productId, quantity } = createCartDto;
        try{
            const quantity = +cart.quantity + 1;
        return await this.save({id: cart.id, product: {id: productId}, quantity });
        }catch(error){
            console.log(error.code);
            if (error.message.includes('unique constraint'))
    throw new HttpException('error!', HttpStatus.BAD_REQUEST);
            
        }
    }

    async deleteCart(user: User, productIds): Promise<any>{
            try{
                await this.delete({ product: {id: In(productIds)}, user });

            return 'success';
            }catch(error){
                console.log(error.code);
                if (error.message.includes('unique constraint'))
        throw new HttpException('error!', HttpStatus.BAD_REQUEST);
                
            }
        }

        async deleteCartItem(id: number): Promise<any>{
            try{
                await this.delete({ id: id });

            return 'success';
            }catch(error){
                console.log(error.code);
                if (error.message.includes('unique constraint'))
        throw new HttpException('error!', HttpStatus.BAD_REQUEST);
                
            }
        }
 

}