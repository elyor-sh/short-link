import {ApiProperty} from "@nestjs/swagger";
import {ObjectId} from "mongoose";

export class LinkQueryDto {

    @ApiProperty({example: 1, description: 'Данная страница', required: false})
    page?: number

    @ApiProperty({example: 1, description: 'Лимит', required: false})
    limit?: number

    @ApiProperty({example: 1, description: 'Сортировка по id', required: false})
    sortBy__id?: 1 | -1

    @ApiProperty({example: 1, description: 'Сортировка по исходной ссылке', required: false})
    sortBy_target?: 1 | -1

    @ApiProperty({example: 1, description: 'Сортировка по короткой ссылке', required: false})
    sortBy_short?: 1 | -1

    @ApiProperty({example: 1, description: 'Сортировка по переходу по ссылке', required: false})
    sortBy_counter?: 1 | -1

    @ApiProperty({example: '631210d1e2ff7eda62e42476', description: 'Фильтр по id', required: false})
    filterBy__id?: ObjectId

    @ApiProperty({example: 'http://localhost:8080', description: 'Фильтр по исходной ссылке', required: false})
    filterBy_target?: string

    @ApiProperty({example: "qWdb5HFvQ", description: 'Фильтр по короткой ссылке', required: false})
    filterBy_short?: string

    @ApiProperty({example: 1, description: 'Фильтр по переходу по ссылке', required: false})
    filterBy_counter?: number

    @ApiProperty({enum: ['all', 'own'], description: 'Выбрать свои либо все ссылки', required: false})
    filterBy_owner: 'all' | 'own'

}