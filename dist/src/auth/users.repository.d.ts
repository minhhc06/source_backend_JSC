import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { PaginationDto } from "src/product/dto/get-product.dto";
export declare class UsersRepository extends Repository<User> {
    createUser(authCredentialsDto: AuthCredentialsDto): Promise<User>;
    getUser(user: User): Promise<User>;
    getListUsers(user: User, paginationDto: PaginationDto): Promise<any>;
}
