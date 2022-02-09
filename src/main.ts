import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
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
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('lamont', app, document);

  const uploadDir = join(
    __dirname,
    ('../../packages/storage-service/' + process.env.IMAGE_LOCAL_PATH) as string,
  );
  console.log(uploadDir);
  app.use(process.env.IMAGE_PUBLIC_URL as string, express.static(uploadDir));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(3000);
}
bootstrap();
