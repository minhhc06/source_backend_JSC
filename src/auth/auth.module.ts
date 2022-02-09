import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersRepository } from './users.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule} from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { HistoryCoinRepository } from './histrory-coin.repository';
import { ProductCategoryRepository } from 'src/product-category/product-category.repository';
import { CartRepository } from 'src/cart/cart.repository';

@Module({
  imports:[
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
        secret: 'topSecret51',
        signOptions:{
          expiresIn: 3600000000000,
        },
    }),
    TypeOrmModule.forFeature([UsersRepository,HistoryCoinRepository, ProductCategoryRepository, CartRepository])
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtStrategy, PassportModule]
})
export class AuthModule {}
