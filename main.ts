require('dotenv').config();
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 4000;
  app.setGlobalPrefix('api/v1');
  // app.useGlobalPipes(new ValidationPipe())
  const config = new DocumentBuilder()
    .setTitle('HR Software')
    .setDescription('The HR Software API description')
    .setVersion('1.0')
    .addTag('HR Software')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/paype-software/swagger-json', app, document);
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
  