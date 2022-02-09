import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { use } from 'passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Cart } from 'src/entities/cart.entity';
import { User } from 'src/entities/user.entity';
import { PaginationDto } from 'src/product/dto/get-product.dto';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { DeleteCartDto } from './dto/delete-cart.dto';

@Controller('cart')
export class CartController {
    constructor(private cartService: CartService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    async getCarts(@GetUser()user: User, @Body() paginationDto: PaginationDto) {
      const carts = await this.cartService.getCarts(paginationDto, user);
      return {
        status: 200,
        message: 'success',
        data: carts,
      };
    }

    @Get('/get-total-cart')
    @UseGuards(AuthGuard('jwt'))
    async getTotalCarts(@GetUser()user: User) {
      const carts = await this.cartService.getTotalCarts(user);
      return {
        status: 200,
        message: 'success',
        data: carts,
      };
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    createProduct(@GetUser() user: User, @Body() createCartDto: CreateCartDto): Promise<Cart> {
      
      return this.cartService.createCart(user, createCartDto);
    }

    @Delete()
    @UseGuards(AuthGuard('jwt'))
    deleteCartItem(@GetUser() user: User, @Body() deleteCartDto: DeleteCartDto): Promise<any>{
      return this.cartService.deleteCartItem(user, deleteCartDto);
    }


}
