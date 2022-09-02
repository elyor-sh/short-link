import {ApiProperty} from "@nestjs/swagger";
import {Link} from "../../link/link.entity";

const ex = {
    paging: {
        page: 1,
        limit: 1,
        totalPage: 1,
        totalCount: 1
    },
    items: [
        {
            "_id": "631210d1e2ff7eda62e42476",
            "short": "62ba3e8c-f6f1-4fa6-b8db-7428468132ba",
            "target": "http://localhost:8080",
            "counter": 1,
            "owner": "6311fbd813cd2974f5dfe2fc",
        }
    ]
}

export class ApiResponseLinkSwagger {

    @ApiProperty({example: ex.paging, description: 'Тип токена'})
    paging: typeof ex.paging

    @ApiProperty({example: ex.items, description: 'Тип токена'})
    items: Link[]
}