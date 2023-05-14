import {ApiProperty} from "@nestjs/swagger";

export class CreateProductDto{
    @ApiProperty({example: 'rtx 4090', description: 'Название товара'})
    readonly name: string;
    @ApiProperty({example: '2', description: 'Номер типа товара'})
    readonly type_id: number;
    @ApiProperty({example: 'Текст Текст Текст', description: 'Описание в виде текста'})
    readonly description: string;
    @ApiProperty({example: '33', description: 'Кол-во товаров'})
    readonly quantity: number;
    
}