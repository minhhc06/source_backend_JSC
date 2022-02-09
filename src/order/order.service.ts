import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { use } from 'passport';
import { UsersRepository } from 'src/auth/users.repository';
import { CartRepository } from 'src/cart/cart.repository';
import { DeleteCartDto } from 'src/cart/dto/delete-cart.dto';
import { Order } from 'src/entities/order.entity';
import { Product } from 'src/entities/product.entity';
import { User } from 'src/entities/user.entity';
import { GetOrderDto, PaginationDto } from 'src/product/dto/get-product.dto';
import { ProductImageRepository } from 'src/product/product-images.repository';
import { Repository } from 'typeorm';
import { CreateOrderDto, StatusOrder } from './dto/create-order.dto';
import { UpdateStatusDto } from './dto/update-status-order.dto';
import { InvoiceRepository } from './invoice/invoice_repository';
import { OrderRepository } from './order.repository';
import { FetchOrderItem } from './order_item/dto/fetch-order-item.dto';
import { UpdateStatusOrderItemDto } from './order_item/dto/update-status-order-item.dto';
import { OrderItemRepository } from './order_item/order-item.repository';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderRepository)
    private orderRepository: OrderRepository,
    @InjectRepository(OrderItemRepository)
    private orderItemRepository: OrderItemRepository,
    @InjectRepository(InvoiceRepository)
    private invoiceRepository: InvoiceRepository,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(CartRepository)
    private cartRepository: CartRepository,
    @InjectRepository(UsersRepository)
    private userRepository: UsersRepository,
  ) {}

  async createOrder(
    user: User,
    createOrderDto: CreateOrderDto,
  ): Promise<any> {
    const products = []
    for (const orderItem of createOrderDto.orderItems) {
    const product = await this.productRepository.findOne(orderItem.productId);

    const order = await this.orderRepository.createOrder(user, createOrderDto, orderItem, product);
      if(product){
        products.push(product.id);
      }else{
         throw new BadRequestException('Can not find product');    
      }
    }

    await this.cartRepository.deleteCart(user, products);
    
 

    return {
      request: createOrderDto,
      status: 200,
      message: "success create order"
    };
  }

  async updateStatusOrder(user: User, updateStatusDto: UpdateStatusDto): Promise<any>{
    const result = await this.orderRepository.updateStatusOrder(updateStatusDto.idOrder, updateStatusDto.statusName);
    
    return {
      request: updateStatusDto,
      data: result
    }
  }

  async fetchOrderItem(fetchOrderItem: FetchOrderItem, user: User):Promise<any>{
    const userInfo = await this.userRepository.findOne(user.id);
    if(userInfo){
      const result = await this.orderItemRepository.fetchHistoryOrder(fetchOrderItem, userInfo.id);
      return {
        request: fetchOrderItem,
        page: fetchOrderItem.page,
        data: result};
    }else{
      throw new BadRequestException('User not found');
    } 
  }

  async updateStatusOrderItem(user:User, updateStatusOrderItemDto :UpdateStatusOrderItemDto):Promise<any>{
    const userInfo = await this.userRepository.findOne(user.id);
    if(userInfo){
      const result = await this.orderItemRepository.updateStatusOrderItem(updateStatusOrderItemDto);
  }else{
    throw new BadRequestException('User not found');
  }
}


  async getOrders(paginationDto: GetOrderDto, userDto: User): Promise<Order[]> {
    try {
      const { page = 1, limit = 10, status } = paginationDto;
      const query = this.orderRepository
        .createQueryBuilder('order')

        .leftJoinAndSelect('order.user', 'user')
        .leftJoinAndSelect('order.invoice', 'invoice')
        .leftJoinAndSelect('order.product', 'product')
        .leftJoinAndSelect('product.productImages', 'productImages')
        .select([
          'order.id',
          'order.total',
          'order.delivery_date',
          'order.note',
          'order.phone_number',
          'order.name_receiver',
          'order.statusName',
          'order.city',
          'order.district',
          'order.ward',
          'order.address',
          'user.fullname',
          'user.username',
          'invoice.status_name',
          'product.id',
          'product.name',
          'product.price',
          'product.quantity',
          'product.about',
          'product.brand',
          'product.material',
          'product.made_in',
          'product.expiry',
          'product.preserve',
          'product.type_skin',
          'productImages.id',
          'productImages.url',
        ]);
        
        if(status){
          query.where('order.userId = :userId and order.statusName = :status', {
            userId: userDto.id,
            status,
          });
        }else{
          query.where('order.userId = :userId', {
            userId: userDto.id,
          });
        }
        

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


 

}
