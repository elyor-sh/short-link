import {Body, Controller, Get, Param, Post, Query, Res} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {LinkService} from "./link.service";
import {Link} from "./link.entity";
import {UserDecorator} from "../user/user.decorator";
import {User} from "../user/user.entity";
import {Response} from "express";
import {Public} from "../auth/public.decorator";
import {ApiResponseLinkSwagger} from "../utils/swagger/link.swagger";
import {LinkQueryDto} from "./dto/link.query.dto";
import {LinkCreateDto} from "./dto/link.create.dto";

@ApiTags('Ссылки')
@Controller('')
export class LinkController {

    constructor(private linkService: LinkService) {}

    @ApiOperation({summary: 'Получение ссылок'})
    @ApiResponse({status: 200, type: ApiResponseLinkSwagger})
    @Get('/squeeze')
    getAll(@Query() query: LinkQueryDto) {

        return this.linkService.getAll(query)
    }

    @ApiOperation({summary: 'Создание ссылок'})
    @ApiResponse({status: 201, type: Link})
    @Post('/squeeze')
    create(@Body() link: LinkCreateDto, @UserDecorator() user: User) {

        return this.linkService.create(link.link, user._id)
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
