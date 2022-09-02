import {ObjectId} from "mongoose";
import {ApiProperty} from "@nestjs/swagger";

export class ApiResponseRegistration {

    @ApiProperty({example: '6311fbd813cd2974f5dfe2fc', description: 'Id пользователя'})
    _id: ObjectId

    @ApiProperty({example: 'username', description: 'Логин пользователя'})
    username: string
}