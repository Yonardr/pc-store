import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface OrderCreationAttr{
    status: string,
    price: number;
}

@Table({tableName: 'orders'})
export class Orders extends Model<Orders, OrderCreationAttr>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
    id: number;

    @ApiProperty({example: 'Сортировочный центр', description: '...'})
    @Column({type: DataType.STRING})
    status: string;

    @ApiProperty({example: '6890', description: 'Цена'})
    @Column({type: DataType.INTEGER})
    price: number;

}