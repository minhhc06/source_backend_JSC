"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const product_module_1 = require("./product/product.module");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const discount_module_1 = require("./discount/discount.module");
const auth_module_1 = require("./auth/auth.module");
const order_module_1 = require("./order/order.module");
const cart_module_1 = require("./cart/cart.module");
const product_category_module_1 = require("./product-category/product-category.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: async () => {
                    return Object.assign(await (0, typeorm_2.getConnectionOptions)(), {
                        autoLoadEntities: true,
                    });
                },
            }),
            product_module_1.ProductModule,
            discount_module_1.DiscountModule,
            auth_module_1.AuthModule,
            order_module_1.OrderModule,
            cart_module_1.CartModule,
            product_category_module_1.ProductCategoryModule
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map