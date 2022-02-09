"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const user_entity_1 = require("../entities/user.entity");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
const get_product_dto_1 = require("../product/dto/get-product.dto");
let UsersRepository = class UsersRepository extends typeorm_1.Repository {
    async createUser(authCredentialsDto) {
        const { fullname, username, password, email, city, district, ward, address, avatar } = authCredentialsDto;
        const regexPhoneNumber = /^((\+)33|0)[1-9](\d{2}){4}$/;
        if (username.match(regexPhoneNumber)) {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = this.create({ fullname, username, password: hashedPassword, email, city, district, ward, address, avatar });
            try {
                return await this.save(user);
            }
            catch (error) {
                console.log(error.code);
                if (error.message.includes('unique constraint'))
                    throw new common_1.HttpException('username or phoneNumber exist!', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        else {
            throw new common_1.BadRequestException('Wrong format phone number');
        }
    }
    async getUser(user) {
        const query = this.createQueryBuilder('user');
        query.where({ username: user.username });
        query.leftJoinAndSelect('user.histories', 'historyCoin').select(['user.id', 'user.fullname', 'user.username',
            'user.email', 'user.city', 'user.district', 'user.ward', 'user.coin',
            'user.address', 'user.avatar', 'historyCoin.id', 'historyCoin.coin']);
        try {
            const userInfo = await query.getOne();
            return userInfo;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async getListUsers(user, paginationDto) {
        const { page = 1, limit = 30, searchString } = paginationDto;
        try {
            const query = this.createQueryBuilder('user');
            query.leftJoinAndSelect('user.histories', 'historyCoin').select(['user.id',
                'user.fullname', 'user.username',
                'user.email', 'user.city', 'user.district', 'user.ward', 'user.coin',
                'user.address', 'user.avatar', 'historyCoin.id', 'historyCoin.coin']);
            if (searchString) {
                query.where('user.fullname like :searchString', {
                    searchString: `%${searchString}%`,
                });
            }
            const users = await query.limit(limit).offset(limit * (page - 1)).getMany();
            return { users: users, totalRecord: users.length };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
};
UsersRepository = __decorate([
    (0, typeorm_1.EntityRepository)(user_entity_1.User)
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map