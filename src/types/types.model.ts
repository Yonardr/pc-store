import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Products} from "../products/products.model";

interface TypesCreationAttrs{
    name: string;
}

@Table({tableName: 'type'})
export class Types extends Model<Types, TypesCreationAttrs>{

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
    id: number;

    @ApiProperty({example: 'Процессоры', description: 'Не может быть null'})
    @Column({type: DataType.STRING, allowNull:false})
    value: string;

    @HasMany(()=>Products)
    products: Products[];

}

