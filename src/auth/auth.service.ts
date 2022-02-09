import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { SignInDto } from './dto/sign-in.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { JwtService} from '@nestjs/jwt';
import { User } from 'src/entities/user.entity';
import { HistoryCoinRepository } from './histrory-coin.repository';
import { ProductCategoryRepository } from 'src/product-category/product-category.repository';
import { CartRepository } from 'src/cart/cart.repository';
import { PaginationDto } from 'src/product/dto/get-product.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersRepository)
        private userRepository: UsersRepository,
        @InjectRepository(HistoryCoinRepository)
        private historyCoinRepository: HistoryCoinRepository,
        @InjectRepository(ProductCategoryRepository)
        private productCategoryRepository: ProductCategoryRepository,

        @InjectRepository(CartRepository)
        private cartRepository: CartRepository,

        private jwtService: JwtService,
    ){}

        async signUp(authCredentialsDto: AuthCredentialsDto): Promise<object>{
            const user = await this.userRepository.createUser(authCredentialsDto);
            
            this.historyCoinRepository.createHistoryCoin(user.id);
            return {success: true, msg: 'created'};
        }

        async getUser(user: User): Promise<any>{
            const userInfo = await this.userRepository.getUser(user);
            // const productCategories = await this.productCategoryRepository.getProductCategory();
            const totalCarts = await this.cartRepository.countTotalCart(user.id);
            return { userInfo, totalCarts}
            
        }

        async getListUsers(user: User, paginationDto : PaginationDto): Promise<any>{
            const users = await this.userRepository.getListUsers(user, paginationDto);
            console.log(users);
            return { 
                request: paginationDto,
                data: users,
                page: paginationDto.page || 1,
                limit: paginationDto.limit || 30,
             }
        }

        async signIn(signInDto: SignInDto): Promise<{accessToken: string}>{
            const {username, password } = signInDto;
            const user = await this.userRepository.findOne({username});

            if(user){
                if(await bcrypt.compare(password, user.password)){
                    const payload = {username};
                const accessToken: string = await this.jwtService.sign(payload);
                return { accessToken};
                } else {
                throw new UnauthorizedException('wrong password');
                 }
            }else{
                throw new UnauthorizedException('Please check your login credentials');
                
            }
        }

}
