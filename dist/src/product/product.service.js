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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("../entities/product.entity");
const product_images_repository_1 = require("./product-images.repository");
const typeorm_2 = require("typeorm");
const discount_entity_1 = require("../entities/discount.entity");
const product_image_entity_1 = require("../entities/product_image.entity");
const product_category_entity_1 = require("../entities/product_category.entity");
const product_repository_1 = require("./product.repository");
const axios_1 = require("axios");
const FormData = require("form-data");
const stream_1 = require("stream");
let ProductService = class ProductService {
    constructor(productRepository, discountRepository, productCategory, productImage, product) {
        this.productRepository = productRepository;
        this.discountRepository = discountRepository;
        this.productCategory = productCategory;
        this.productImage = productImage;
        this.product = product;
    }
    async getProduct(fetchProductsDto) {
        try {
            const { page = 1, limit = 20, categoryId, searchString, } = fetchProductsDto;
            const query = this.productRepository
                .createQueryBuilder('product')
                .select([
                'product.id',
                'product.name',
                'product.price',
                'product.quantity',
            ])
                .leftJoinAndSelect('product.discounts', 'discount')
                .leftJoinAndSelect('product.productImages', 'productImage')
                .addSelect([
                'productImage.id',
                'productImage.url',
                'discount.discount',
                'discount.name_discount',
            ])
                .orderBy('product.id', 'DESC');
            if (categoryId) {
                query.innerJoinAndSelect('product.productCategory', 'productCategory', 'product.productCategoryId = :categoryId', { categoryId });
            }
            if (searchString) {
                query.where('product.name like :searchString', {
                    searchString: `%${searchString}%`,
                });
            }
            const product = await query
                .limit(limit)
                .offset(limit * (page - 1))
                .getMany();
            return product;
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException();
        }
    }
    async getDetailProduct(id) {
        const query = this.productRepository
            .createQueryBuilder('product')
            .select([
            'product.id',
            'product.name',
            'product.price',
            'product.about',
            'product.brand',
            'product.material',
            'product.made_in',
            'product.expiry',
            'product.preserve',
            'product.type_skin',
        ])
            .leftJoinAndSelect('product.discounts', 'discount')
            .leftJoinAndMapMany('product.productImages', product_image_entity_1.ProductImage, 'productImage', 'product.id = productImage.productId')
            .addSelect([
            'productImage.id',
            'productImage.url',
            'discount.discount',
            'discount.name_discount',
        ])
            .where('product.id = :id', { id: id })
            .getOne();
        return query;
    }
    async createProduct(createProductDto) {
        const { name, category, price, quantity, about, brand, material, made_in, expiry, preserve, type_skin, discount, name_discount, } = createProductDto;
        const foundCategory = await this.productCategory.findOne({
            where: { id: category },
        });
        if (!foundCategory) {
            throw new common_1.BadRequestException('Category not found');
        }
        const productModel = this.productRepository.create({
            name,
            productCategory: foundCategory,
            price,
            quantity,
            about,
            brand,
            material,
            made_in,
            expiry,
            preserve,
            type_skin,
        });
        const products = await this.productRepository.save(productModel);
        if (discount) {
            let newDiscount = this.discountRepository.create({
                discount,
                name_discount,
                id_product: productModel.id,
                product: products,
            });
            newDiscount = await this.discountRepository.save(newDiscount);
        }
        return productModel;
    }
    async bufferToStream(buffer) {
        const duplexStream = new stream_1.Duplex();
        duplexStream.push(buffer);
        duplexStream.push(null);
        return duplexStream;
    }
    async uploadImageService(uploadImageDto, file) {
        const productResult = await this.productRepository.findOne({
            id: uploadImageDto.idProduct,
        });
        const formData = new FormData();
        formData.append('image', await this.bufferToStream(file.buffer), file.originalname);
        const { data } = await axios_1.default.post(process.env.BASE_URL + '/storage/products', formData, {
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
            },
        });
        console.log(data);
        if (productResult) {
            return this.productImage.uploadImage(data, productResult);
        }
        else {
            throw new common_1.UnauthorizedException('Wrong id product upload file');
        }
    }
    async removeProductImage(productId) {
        if (!productId) {
            throw new common_1.BadRequestException('productId is required');
        }
        const foundProduct = await this.product.findOne(productId, {
            relations: ['productImages'],
        });
        const productImgs = foundProduct.productImages.map((t) => t.id);
        await this.productImage.delete(productImgs);
        return { success: true, msg: 'image have been successfully deleted' };
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(discount_entity_1.Discount)),
    __param(2, (0, typeorm_1.InjectRepository)(product_category_entity_1.ProductCategory)),
    __param(3, (0, typeorm_1.InjectRepository)(product_images_repository_1.ProductImageRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(product_repository_1.ProductRepository)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        product_images_repository_1.ProductImageRepository,
        product_repository_1.ProductRepository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map