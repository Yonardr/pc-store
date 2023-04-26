import {ApiProperty} from "@nestjs/swagger";

export class CreateCharacteristicsDto{
    @ApiProperty({example: 'Socket', description:'Назавание новой характеристики'})
    readonly name: string;
}