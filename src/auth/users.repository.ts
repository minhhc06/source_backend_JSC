import { User } from "src/entities/user.entity";
import { EntityRepository, Repository  } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import * as bcrypt from 'bcrypt';
import { BadRequestException, HttpException, HttpStatus, InternalServerErrorException, Logger } from '@nestjs/common';
import { PaginationDto } from "src/product/dto/get-product.dto";


@EntityRepository(User)
export class UsersRepository extends Repository<User>{
    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<User>{
         const { fullname,username, password,  email, city, district, ward, address, avatar} = authCredentialsDto;
     
         const regexPhoneNumber = /^((\+)33|0)[1-9](\d{2}){4}$/; 

          if (username.match(regexPhoneNumber)) {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = this.create({fullname, username, password: hashedPassword, email, city, district, ward, address, avatar});
    
             try{
               return await this.save(user);
             }catch(error){
                 console.log(error.code);
                 if (error.message.includes('unique constraint'))
            throw new HttpException('username or phoneNumber exist!', HttpStatus.BAD_REQUEST);
                 
             }    
          } else {
            throw new BadRequestException('Wrong format phone number');
          }
        

    }

async getUser(user: User): Promise<User>{
    const query = this.createQueryBuilder('user');
    query.where({ username: user.username });
    query.leftJoinAndSelect('user.histories', 'historyCoin').select(['user.id', 'user.fullname','user.username', 
    'user.email', 'user.city', 'user.district', 'user.ward', 'user.coin',
    'user.address', 'user.avatar' , 'historyCoin.id', 'historyCoin.coin']);
    

      try {
        const userInfo = await query.getOne();
        return userInfo;
        
      } catch (error) {
        throw new InternalServerErrorException();
      }
   }

   async getListUsers(user: User, paginationDto: PaginationDto): Promise<any>{
      const { page = 1, limit = 30, searchString } = paginationDto;
    
      try {
        const query = this.createQueryBuilder('user');
        query.leftJoinAndSelect('user.histories', 'historyCoin').select(['user.id', 
        'user.fullname','user.username', 
        'user.email', 'user.city', 'user.district', 'user.ward', 'user.coin',
        'user.address', 'user.avatar' , 'historyCoin.id', 'historyCoin.coin']);
        if (searchString) {
          query.where('user.fullname like :searchString', {
            searchString: `%${searchString}%`,
          });
        }

        const users = await query.limit(limit).offset(limit * (page - 1)).getMany();
        return {users: users, totalRecord: users.length};
        
      } catch (error) {
        throw new InternalServerErrorException();
      }
   }

}
