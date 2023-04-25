import {ApiProperty} from "@nestjs/swagger";

export class CreateProductDto{
    @ApiProperty({example: 'rtx 4090', description: 'Название товара'})
    readonly name: string;
    @ApiProperty({example: '2', description: 'Номер типа товара'})
    readonly type_id: number;
    // @ApiProperty({example: '1', description: 'Номер описания'})
    // readonly description: number;
}