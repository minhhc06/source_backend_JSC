import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { SignInDto } from './dto/sign-in.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';
import { User } from 'src/entities/user.entity';
import { PaginationDto } from 'src/product/dto/get-product.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Post('/signup')
    signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<object>{
        return this.authService.signUp(authCredentialsDto);
    }

    @Post('/signin')
    signIn(@Body() signInDto: SignInDto): Promise<{accessToken: string}>{
        return this.authService.signIn(signInDto);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(@Req() req){
        console.log(req);
    }

    @Get('/getUser')
    @UseGuards(AuthGuard())
    getUser(@GetUser() user: User): Promise<any>{
    return this.authService.getUser(user);
    }

    @Get('/getListUsers')
    @UseGuards(AuthGuard())
    getListUsers(@GetUser() user: User, @Body() paginationDto :PaginationDto): Promise<any>{
    return this.authService.getListUsers(user, paginationDto);
    }

}
