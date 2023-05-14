import {ApiProperty} from "@nestjs/swagger";

export class CreateCartDto{
    @ApiProperty({example: 'islamloh123', description: 'логин пользователя к которому будет привязана корзина'})
    readonly user_login: string;
    @ApiProperty({example: '2', description: 'ID товара'})
    readonly prod_id: number;
    @ApiProperty({example: '33', description: 'Кол-во товара'})
    readonly quantity: number;
}