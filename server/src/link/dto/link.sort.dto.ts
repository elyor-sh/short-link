import {ApiProperty} from "@nestjs/swagger";

export class LinkSortDto {

    @ApiProperty({example: 1, description: 'Сортировка по id', required: false})
    _id?: 1 | -1

    @ApiProperty({example: 1, description: 'Сортировка по исходной ссылке', required: false})
    target?: 1 | -1

    @ApiProperty({example: 1, description: 'Сортировка по короткой ссылке', required: false})
    short?: 1 | -1

    @ApiProperty({example: 1, description: 'Сортировка по переходу по ссылке', required: false})
    counter?: 1 | -1

}