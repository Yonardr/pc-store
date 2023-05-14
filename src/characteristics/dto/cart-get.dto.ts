import {ApiProperty} from "@nestjs/swagger";

export class CartGetDto{
    @ApiProperty({example: 'islamloh', description:'логин пользователя для вывода его корзины'})
    readonly login: string;
}