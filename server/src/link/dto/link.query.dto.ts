import {ApiProperty} from "@nestjs/swagger";

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

}