import {BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Types} from "../types/types.model";
import {Descriptions} from "./des-prod.model";



interface ProductsCreationAttrs{
    name: string;
    type_id: number;
    des_id: number;
}

@Table({tableName: 'products'})
export class Products extends Model<Products, ProductsCreationAttrs>{

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
    id: number;

    @ApiProperty({example: 'intel i5 10400k', description: 'Название товара, не уникальное поле, не может быть null'})
    @Column({type: DataType.STRING, allowNull:false})
    name: string;


    @BelongsTo(()=>Types)
    types: Types[];

    @ForeignKey(()=>Types)
    @Column({type: DataType.INTEGER})
    type_id: number



    // @ApiProperty({example: '2', description: 'id описания товара'})
    // @HasOne(() => Descriptions)
    // des_id : Descriptions[];
}

