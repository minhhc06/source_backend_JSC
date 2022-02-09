import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { use } from 'passport';
import { Cart } from 'src/entities/cart.entity';
import { Product } from 'src/entities/product.entity';
import { User } from 'src/entities/user.entity';
import { PaginationDto } from 'src/product/dto/get-product.dto';
import { ProductImageRepository } from 'src/product/product-images.repository';
import { Repository } from 'typeorm';
import { CartRepository } from './cart.repository';
import { CreateCartDto } from './dto/create-cart.dto';
import { DeleteCartDto } from './dto/delete-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartRepository)
    private cartRepository: CartRepository,

    @InjectRepository(Product)
    private product: Repository<Product>,
  ) {}

  async createCart(user: User, createCartDto: CreateCartDto): Promise<any> {
    const product = await this.product.findOne(createCartDto.productId);
    const foundCart = await this.cartRepository.findOne({
      where: { product, user },
    });
    console.log('foundCart ' + foundCart);
    if (foundCart) {
      await this.cartRepository.updateCart(user, createCartDto, foundCart);
    } else {
      const order = await this.cartRepository.createCart(user, product);
    }
    return 'success';
  }

  async getCarts(paginationDto: PaginationDto, userDto: User): Promise<Cart[]> {
    try {
      const { page = 1, limit = 10 } = paginationDto;
      const query = this.cartRepository
        .createQueryBuilder('cart')

        .leftJoinAndSelect('cart.user', 'user')
        .leftJoinAndSelect('cart.product', 'product')
        .leftJoinAndSelect('product.productImages', 'productImages')
        // .select([
        //   'order.id',
        //   'order.total',
        //   'order.delivery_date',
        //   'order.note',
        //   'order.phone_number',
        //   'order.name_reciever',
        //   'order.city',
        //   'order.district',
        //   'order.ward',
        //   'order.address',
        //   'user.fullname',
        //   'user.username',
        //   'orderItem.id',
        //   'invoice.status_name',
        //   'orderItem.product',
        //   'product.id',
        //   'product.name',
        //   'product.price',
        //   'product.quantity',
        //   'product.about',
        //   'product.brand',
        //   'product.material',
        //   'product.made_in',
        //   'product.expiry',
        //   'product.preserve',
        //   'product.type_skin',
        //   'productImages.id',
        //   'productImages.url',
        //   'orderItem.quantity',
        // ])
        .where('cart.userId = :userId', {
          userId: userDto.id,
        });

      const orders = await query
        .limit(limit)
        .offset(limit * (page - 1))
        .getMany();
      return orders;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async getTotalCarts(userDto: User): Promise<any> {
    try {
      const query = this.cartRepository
        .createQueryBuilder('cart')
        .where('cart.userId = :userId', {
          userId: userDto.id,
        });

      // const orders = await query.getManyAndCount();

      const [orders, count] = await query.getManyAndCount();

      return { orders, count };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async deleteCartItem(userDto: User, deleteCartDto: DeleteCartDto): Promise<any> {
    try {

      const query = this.cartRepository
        .deleteCartItem(deleteCartDto.id);

      return 'success';
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

}
