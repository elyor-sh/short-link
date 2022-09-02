import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import * as bcrypt from "bcryptjs"
import {JwtService} from "@nestjs/jwt";

import {User} from "../user/user.entity";
import {CreateUserDto} from "../user/dto/user.create.dto";
import {UserService} from "../user/user.service";

@Injectable()
export class AuthService {

    // Заинжектим необходимые сервисы
    constructor(private usersService: UserService, private jwtService: JwtService) {
    }

    // Регистрация
    async registration(userDto: CreateUserDto): Promise<Omit<User, 'password'>> {
        const candidate = await this.usersService.getUserByUserName(userDto.username)

        if (candidate) {
            throw new HttpException('Пользователь с таким username уже существует', HttpStatus.BAD_REQUEST)
        }

        const hashPassword = await bcrypt.hash(userDto.password, 7)

        const user = await this.usersService.createUser({...userDto, password: hashPassword})

        return {
            _id: user._id,
            username: user.username
        }
    }

    // Авторизация
    async login(userDto: CreateUserDto): Promise<any> {
        return this.validateUser(userDto)
    }

    // Генерация токена
    private async generateToken(user: User) {
        const payload = { username: user.username, _id: user._id}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    // Валидация пользователя
    private async validateUser(userDto: CreateUserDto) {

        const user = await this.usersService.getUserByUserName(userDto.username)

        const isEqualPass = await bcrypt.compare(userDto.password, user.password)

        if (user && isEqualPass) {
            const token = await this.generateToken(user)
            const newUser = JSON.parse(JSON.stringify(user))
            delete newUser.password
            return {
                access_token: token.token,
                token_type: 'bearer'
            }
        }

        throw new UnauthorizedException('Неправильный логин или пароль')
    }

}
