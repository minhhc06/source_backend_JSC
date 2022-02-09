import { User } from "src/entities/user.entity";
import { EntityRepository, Repository  } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { HistoryCoin } from "src/entities/history_coin.entity";


@EntityRepository(HistoryCoin)
export class HistoryCoinRepository extends Repository<HistoryCoin>{
    // private logger = new Logger('TasksController', true);

    async createHistoryCoin(id: number): Promise<void>{
        //  const { fullname,username, password,  phone_number, city, district, ward, address, avatar} = 
        //  authCredentialsDto;


        // console.log('id_user', user.id);
        const history = this.create({id_user: id});

         try{
            await this.save(history);
         }catch(error){
             console.log(error.code);
             
         }

    }

//     async getUser(user: User): Promise<User>{
//         const query = this.createQueryBuilder('user');
//       query.where({ username: user.username });
//       try {
//         const userInfo = await query.getOne();      
//         return userInfo;
        
//       } catch (error) {
//         throw new InternalServerErrorException();
//       }

//    }

}
