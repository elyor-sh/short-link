import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'password1234', description: 'Пароль'})
    readonly password: string

    @ApiProperty({example: 'username', description: 'Username, login'})
    readonly username: string
}