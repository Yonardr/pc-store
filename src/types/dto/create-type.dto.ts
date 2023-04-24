import {ApiProperty} from "@nestjs/swagger";

export class CreateTypeDto{
    @ApiProperty({example: 'Видеокарты', description: 'Тип товара'})
    readonly value: string;
}