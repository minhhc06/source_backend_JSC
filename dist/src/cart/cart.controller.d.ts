import { Cart } from 'src/entities/cart.entity';
import { User } from 'src/entities/user.entity';
import { PaginationDto } from 'src/product/dto/get-product.dto';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { DeleteCartDto } from './dto/delete-cart.dto';
export declare class CartController {
    private cartService;
    constructor(cartService: CartService);
    getCarts(user: User, paginationDto: PaginationDto): Promise<{
        status: number;
        message: string;
        data: Cart[];
    }>;
    getTotalCarts(user: User): Promise<{
        status: number;
        message: string;
        data: any;
    }>;
    createProduct(user: User, createCartDto: CreateCartDto): Promise<Cart>;
    deleteCartItem(user: User, deleteCartDto: DeleteCartDto): Promise<any>;
}
