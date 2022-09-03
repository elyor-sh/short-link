import {ApiProperty} from "@nestjs/swagger";

export class LinkCreateDto {

    @ApiProperty({example: 'http://localhost:8080', description: 'Сссылка', required: true})
    link: string
}