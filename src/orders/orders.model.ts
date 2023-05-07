import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Products} from "../products/products.model";
import {ProductOrder} from "./product-order.model";

@Table({tableName: 'orders'})
export class Orders extends Model<Orders>{

    @ApiProperty({example: '1', description: 'Уникальный номер корзины'})
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true})
    id: number;

    @BelongsToMany(()=> Products, ()=> ProductOrder)
    products: Products[];
}