import {ApiProperty} from "@nestjs/swagger";

export class LinkPaginationDto {

   @ApiProperty({example: 1, description: 'Данная страница', required: false})
    page?: number

    @ApiProperty({example: 1, description: 'Лимит', required: false})
    limit?: number

}