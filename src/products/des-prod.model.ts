import {Column, DataType, ForeignKey, HasOne, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Products} from "./products.model";

interface DescriptionsCreationAttrs{
    name: string;
}

@Table({tableName: 'descriptions', updatedAt:false, createdAt:false})
export class Descriptions extends Model<DescriptionsCreationAttrs>{

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
    id: number;

    @ApiProperty({example: 'Процессор Intel Core i5-10400F OEM способен проявить свою эффективность в составе игровых систем и мощных рабочих станций. Графическое ядро отсутствует: вам будет нужно позаботиться о выборе видеокарты.', description: 'Может быть нулл'})
    @Column({type: DataType.STRING})
    value: string;

    @HasOne(()=> Products)
    products: Products[];
}

