import { AppModule } from './app.module'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()

  // ======================= Swagger =======================
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Baloo Server')
    .setVersion('1.0')
    .addBearerAuth()
    .build()

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('docs', app, swaggerDocument, {
    customSiteTitle: 'WISA Server Document APIs',
  })

  await app.listen(4000)
}
bootstrap()
