import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { LinkModule } from './link/link.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_URI),
    AuthModule,
    UserModule,
    LinkModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
