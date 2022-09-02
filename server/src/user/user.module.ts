import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {UserSchema} from "./user.entity";

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
  ],
})
export class UserModule {}
