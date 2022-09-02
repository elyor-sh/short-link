import {Body, Controller, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../user/dto/user.create.dto";
import {Public} from "./public.decorator";
import {ApiResponseRegistration} from "../utils/swagger/registration.swagger";
import {ApiResponseLogin} from "../utils/swagger/login.swagger";

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'Регистрация'})
    @ApiResponse({status: 201, type: ApiResponseRegistration})
    @Public()
    @Post('/register')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }

    @ApiOperation({summary: 'Авторизация'})
    @ApiResponse({status: 201, type: ApiResponseLogin})
    @Public()
    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto)
    }

}
