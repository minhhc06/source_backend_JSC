import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import * as multer from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadImageDto } from './dto/upload-image.dto';
import { ProductImage } from 'src/entities/product_image.entity';
import { FetchProductsDto } from './dto/fetch-products.dto';

export const storage = {
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10240000,
  },
};

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  async getProduct(@Body() fetchProductsDto: FetchProductsDto) {
    const products = await this.productService.getProduct(fetchProductsDto);
    return {
      status: 200,
      message: 'ok',
      data: products,
      page: fetchProductsDto.page || 1,
      limit: fetchProductsDto.limit || 20,
      totalRecords: products.length,
    };
  }

  @Get(':id')
  async fetchDetailProduct(@Param() param) {
    const product = await this.productService.getDetailProduct(param.id);
    return {
      status: 200,
      message: 'ok',
      data: product,
    };
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    console.log(createProductDto);
    return this.productService.createProduct(createProductDto);
  }

  @Post('remove-product-image')
  removeProductImage(@Body('productId') productId: number) {
    return this.productService.removeProductImage(productId);
  }

  @Post('/uploadImage')
  @UseInterceptors(FileInterceptor('image', storage))
  createTask(
    @Body() uploadImageDto: UploadImageDto,
    @UploadedFile() image,
  ): Promise<ProductImage> {
    uploadImageDto.image_name = image.originalname;

    return this.productService.uploadImageService(uploadImageDto, image);
  }
}
