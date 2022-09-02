import {Controller, Get, HttpException, HttpStatus, Param, Post, Query, Res} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {LinkService} from "./link.service";
import {Link} from "./link.entity";
import {UserDecorator} from "../user/user.decorator";
import {User} from "../user/user.entity";
import {Response} from "express";
import {Public} from "../auth/public.decorator";
import {ApiResponseLinkSwagger} from "../utils/swagger/link.swagger";
import {LinkPaginationDto} from "./dto/link.pagination.dto";

@ApiTags('Ссылки')
@Controller('squeeze')
export class LinkController {

    constructor(private linkService: LinkService) {}

    @ApiOperation({summary: 'Получение ссылок'})
    @ApiResponse({status: 200, type: ApiResponseLinkSwagger})
    @Get()
    getAll(@Query() pagination: LinkPaginationDto) {
        return this.linkService.getAll(Number(pagination.page || 1), Number(pagination.limit || 20))
    }

    @ApiOperation({summary: 'Создание ссылок'})
    @ApiResponse({status: 201, type: Link})
    @Post()
    create(@Query('link') link: string, @UserDecorator() user: User) {

        const urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

        if(!urlRegex.test(link)){
            throw new HttpException({message: 'Невалидная ссылка'}, HttpStatus.BAD_REQUEST)
        }

        return this.linkService.create(link, user._id)
    }

    @ApiOperation({summary: 'Получение ссылок'})
    @ApiResponse({status: 304, type: [Link]})
    @Public()
    @Get('/s/:key')
    async getOne(@Param('key') key: string, @Res() res: Response) {

        const url = await this.linkService.getOne(key)

        return res.redirect(url)
    }
}
