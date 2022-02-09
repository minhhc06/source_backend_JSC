"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_repository_1 = require("./users.repository");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../entities/user.entity");
const histrory_coin_repository_1 = require("./histrory-coin.repository");
const product_category_repository_1 = require("../product-category/product-category.repository");
const cart_repository_1 = require("../cart/cart.repository");
const get_product_dto_1 = require("../product/dto/get-product.dto");
let AuthService = class AuthService {
    constructor(userRepository, historyCoinRepository, productCategoryRepository, cartRepository, jwtService) {
        this.userRepository = userRepository;
        this.historyCoinRepository = historyCoinRepository;
        this.productCategoryRepository = productCategoryRepository;
        this.cartRepository = cartRepository;
        this.jwtService = jwtService;
    }
    async signUp(authCredentialsDto) {
        const user = await this.userRepository.createUser(authCredentialsDto);
        this.historyCoinRepository.createHistoryCoin(user.id);
        return { success: true, msg: 'created' };
    }
    async getUser(user) {
        const userInfo = await this.userRepository.getUser(user);
        const totalCarts = await this.cartRepository.countTotalCart(user.id);
        return { userInfo, totalCarts };
    }
    async getListUsers(user, paginationDto) {
        const users = await this.userRepository.getListUsers(user, paginationDto);
        console.log(users);
        return {
            request: paginationDto,
            data: users,
            page: paginationDto.page || 1,
            limit: paginationDto.limit || 30,
        };
    }
    async signIn(signInDto) {
        const { username, password } = signInDto;
        const user = await this.userRepository.findOne({ username });
        if (user) {
            if (await bcrypt.compare(password, user.password)) {
                const payload = { username };
                const accessToken = await this.jwtService.sign(payload);
                return { accessToken };
            }
            else {
                throw new common_1.UnauthorizedException('wrong password');
            }
        }
        else {
            throw new common_1.UnauthorizedException('Please check your login credentials');
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_repository_1.UsersRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(histrory_coin_repository_1.HistoryCoinRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(product_category_repository_1.ProductCategoryRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(cart_repository_1.CartRepository)),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        histrory_coin_repository_1.HistoryCoinRepository,
        product_category_repository_1.ProductCategoryRepository,
        cart_repository_1.CartRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map