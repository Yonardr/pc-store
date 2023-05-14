import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Types} from "../types/types.model";
import {Descriptions} from "./des-prod.model";
import {Characteristics} from "../characteristics/characteristics.model";
import {ProductsCharacteristics} from "../characteristics/products-characteristics.model";


interface ProductsCreationAttrs{
    name: string;
    type_id: number;
    des_id: number;
    quantity: number;
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

    @BelongsTo(()=>Descriptions)
    description: Descriptions[];

    @ForeignKey(()=>Descriptions)
    @Column({type: DataType.INTEGER})
    description_id: number

    @ApiProperty({example: '31', description: 'кол-во товаров в наличии'})
    @Column({type: DataType.INTEGER})
    quantity: number;

    @BelongsToMany(()=> Characteristics, ()=> ProductsCharacteristics)
    characteristics: Characteristics[];
}

