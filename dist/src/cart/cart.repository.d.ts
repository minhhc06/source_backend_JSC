import { Cart } from "src/entities/cart.entity";
import { Product } from "src/entities/product.entity";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { CreateCartDto } from "./dto/create-cart.dto";
export declare class CartRepository extends Repository<Cart> {
    createCart(user: User, product: Product): Promise<Cart>;
    countTotalCart(userId: number): Promise<number>;
    updateCart(user: User, createCartDto: CreateCartDto, cart: Cart): Promise<Cart>;
    deleteCart(user: User, productIds: any): Promise<any>;
    deleteCartItem(id: number): Promise<any>;
}
