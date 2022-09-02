import {ApiProperty} from "@nestjs/swagger";

export class ApiResponseLogin {

    @ApiProperty({example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwidXNlcm5hbWUiOiJhZG1pbiIsImlkIjoiNjMxMWZiZDgxM2NkMjk3NGY1ZGZlMmZjIiwiaWF0IjoxNjYyMTIzOTIzLCJleHAiOjE2NjIxNjcxMjN9.gGqVzfeTuJo8mE2Qv669XHzPhbfWu0v-G0tx0ps3iIY', description: 'Токен пользователя'})
    access_token: string

    @ApiProperty({example: 'bearer', description: 'Тип токена'})
    token_type: string
}