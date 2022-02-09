"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const express = require("express");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    config.servers = [
        {
            url: 'https://vantaiphyphy.com/api',
        },
    ];
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('lamont', app, document);
    const uploadDir = (0, path_1.join)(__dirname, ('../../packages/storage-service/' + process.env.IMAGE_LOCAL_PATH));
    console.log(uploadDir);
    app.use(process.env.IMAGE_PUBLIC_URL, express.static(uploadDir));
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map