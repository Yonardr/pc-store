import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

@Table({tableName: 'characteristics'})
export class Characteristics extends Model<Characteristics>{

    @ApiProperty({example:'1', description:'Уникальный номер характеристики'})
    @Column({type: DataType.INTEGER, primaryKey:true, autoIncrement: true, unique:true})
    id: number;

    @ApiProperty({example: 'Сокет', description: 'Название поля в характеристиках'})
    @Column({type: DataType.STRING, unique:true, allowNull:false})
    name: string;

}