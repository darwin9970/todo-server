import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './core/filter/http-exception/http-exception.filter';
import { TransformInterceptor } from './core/interceptor/transform/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局注册过滤器
  app.useGlobalInterceptors(new TransformInterceptor());
  // 全局注册拦截器
  app.useGlobalFilters(new HttpExceptionFilter());

  // 设置swagger
  const config = new DocumentBuilder()
    .setTitle('nest-demo-todos')
    .setDescription('nest-demo-todos接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
