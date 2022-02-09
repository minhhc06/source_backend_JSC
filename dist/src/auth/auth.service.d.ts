import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { SignInDto } from './dto/sign-in.dto';
import { UsersRepository } from './users.repository';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities/user.entity';
import { HistoryCoinRepository } from './histrory-coin.repository';
import { ProductCategoryRepository } from 'src/product-category/product-category.repository';
import { CartRepository } from 'src/cart/cart.repository';
import { PaginationDto } from 'src/product/dto/get-product.dto';
export declare class AuthService {
    private userRepository;
    private historyCoinRepository;
    private productCategoryRepository;
    private cartRepository;
    private jwtService;
    constructor(userRepository: UsersRepository, historyCoinRepository: HistoryCoinRepository, productCategoryRepository: ProductCategoryRepository, cartRepository: CartRepository, jwtService: JwtService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<object>;
    getUser(user: User): Promise<any>;
    getListUsers(user: User, paginationDto: PaginationDto): Promise<any>;
    signIn(signInDto: SignInDto): Promise<{
        accessToken: string;
    }>;
}
