import {ApiProperty} from "@nestjs/swagger";

export class User {

    @ApiProperty({example: '6275033fe9ce794f20c959b9', description: 'Уникальный идентификатор'})
    id: number

    @ApiProperty({example: 'username', description: 'Логин пользователя'})
    username: string

    @ApiProperty({example: 'password', description: 'Пароль пользователя'})
    password: string

}