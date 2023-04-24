import {ApiProperty} from "@nestjs/swagger";

export class ReqProductDto{
    @ApiProperty({example: 'rtx 4090', description: 'Название товара'})
    readonly name: string;
    @ApiProperty({example: '2', description: 'Номер типа товара'})
    readonly type_id: number;
    @ApiProperty({example: 'Текст текст текст текст', description: 'Текст описания товара'})
    readonly description: string;
}