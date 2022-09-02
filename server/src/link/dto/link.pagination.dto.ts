import {ApiProperty} from "@nestjs/swagger";
import {LinkSortDto} from "./link.sort.dto";

export class LinkPaginationDto extends LinkSortDto {

    @ApiProperty({example: 1, description: 'Данная страница', required: false})
    page?: number

    @ApiProperty({example: 1, description: 'Лимит', required: false})
    limit?: number

}