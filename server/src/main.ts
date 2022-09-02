import {NestFactory, Reflector} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {JwtService} from "@nestjs/jwt";
import { AppModule } from './app.module';
import {JwtAuthGuard} from "./auth/jwt-auth.guard";

async function bootstrap() {
  try {

    const PORT = process.env.PORT || 4400;
    const app = await NestFactory.create(AppModule,  { cors: true });

    app.setGlobalPrefix('/api')

    const reflector = app.get(Reflector);

    app.useGlobalGuards(new JwtAuthGuard(new JwtService({}), reflector))

    const config = new DocumentBuilder()
        .setTitle('Short link app api')
        .setDescription(`Documentation for REST API`)
        .setVersion('1.0.0')
        .addTag('Short link app')
        .addBearerAuth()
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => {
      console.log(`Server has been started in port ${PORT}`);
    });

  }catch (e) {
    console.log('Server start error', e)
  }
}
bootstrap();
