import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Products} from "../products/products.model";
import {ProductsCharacteristics} from "./products-characteristics.model";

@Table({tableName: 'characteristics', createdAt: false, updatedAt: false})
export class Characteristics extends Model<Characteristics>{

    @ApiProperty({example:'1', description:'Уникальный номер характеристики'})
    @Column({type: DataType.INTEGER, primaryKey:true, autoIncrement: true, unique:true})
    id: number;

    @ApiProperty({example: 'Сокет', description: 'Название поля в характеристиках'})
    @Column({type: DataType.STRING, unique:true, allowNull:false})
    name: string;

    @ApiProperty({example: '1200', description: 'String значение характеристики'})
    @Column({type: DataType.STRING})
    value: string;

    @BelongsToMany(() => Products, () => ProductsCharacteristics)
    products : Products[]
}