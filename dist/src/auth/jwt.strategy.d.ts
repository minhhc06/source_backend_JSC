import { Strategy } from 'passport-jwt';
import { User } from "src/entities/user.entity";
import { JwtPayload } from "./jwt-payload.interface";
import { UsersRepository } from "./users.repository";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
