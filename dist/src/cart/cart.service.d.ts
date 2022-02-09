import { Cart } from 'src/entities/cart.entity';
import { Product } from 'src/entities/product.entity';
import { User } from 'src/entities/user.entity';
import { PaginationDto } from 'src/product/dto/get-product.dto';
import { Repository } from 'typeorm';
import { CartRepository } from './cart.repository';
import { CreateCartDto } from './dto/create-cart.dto';
import { DeleteCartDto } from './dto/delete-cart.dto';
export declare class CartService {
    private cartRepository;
    private product;
    constructor(cartRepository: CartRepository, product: Repository<Product>);
    createCart(user: User, createCartDto: CreateCartDto): Promise<any>;
    getCarts(paginationDto: PaginationDto, userDto: User): Promise<Cart[]>;
    getTotalCarts(userDto: User): Promise<any>;
    deleteCartItem(userDto: User, deleteCartDto: DeleteCartDto): Promise<any>;
}
