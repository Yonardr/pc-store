import {ApiProperty} from "@nestjs/swagger";

export class CreateCharacteristicsDto{
    @ApiProperty({example: '1', description:'ID товара к которому присваивается новая характеристика'})
    readonly prod_id: number;
    @ApiProperty({example: 'Socket', description:'Название новой характеристики'})
    readonly name: string;
    @ApiProperty({example: '1200', description:'Значение новой характеристики'})
    readonly value: string;
}