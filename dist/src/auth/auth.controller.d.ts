import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { SignInDto } from './dto/sign-in.dto';
import { User } from 'src/entities/user.entity';
import { PaginationDto } from 'src/product/dto/get-product.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<object>;
    signIn(signInDto: SignInDto): Promise<{
        accessToken: string;
    }>;
    test(req: any): void;
    getUser(user: User): Promise<any>;
    getListUsers(user: User, paginationDto: PaginationDto): Promise<any>;
}
