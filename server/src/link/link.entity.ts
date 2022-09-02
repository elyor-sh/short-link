import {ApiProperty} from "@nestjs/swagger";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import {User} from "../user/user.entity";

@Schema()
export class Link {

    @ApiProperty({example: '6311fbd813cd2974f5dfe2fc', description: 'Id линка'})
    _id: mongoose.Schema.Types.ObjectId

    @ApiProperty({example: 'u4rtyvxyvg', description: 'Сокращенная ссылка'})
    @Prop({type: String, isRequired: true})
    short: string

    @ApiProperty({example: 'http://localhost:8080', description: 'Оригинальная ссылка'})
    @Prop({type: String, isRequired: true})
    target: string

    @ApiProperty({example: 10, description: 'Число которое укажет сколько раз по сокращенной ссылке переходили'})
    @Prop({type: Number, isRequired: true})
    counter: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
    owner: User

}

export type LinkDocument = Link & Document;

export const LinkSchema = SchemaFactory.createForClass(Link);