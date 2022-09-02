import {ApiProperty} from "@nestjs/swagger";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from "mongoose";

@Schema()
export class User {

    @ApiProperty({example: '6311fbd813cd2974f5dfe2fc', description: 'Id пользователя'})
    _id: mongoose.Schema.Types.ObjectId

    @ApiProperty({example: 'username', description: 'Логин пользователя'})
    @Prop({type: String, isRequired: true, unique: true})
    username: string

    @ApiProperty({example: 'password', description: 'Пароль пользователя'})
    @Prop({type: String, isRequired: true})
    password: string

}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);