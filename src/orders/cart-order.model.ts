import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Carts} from "../carts/carts.model";
import {Orders} from "./orders.model";

interface CreateConnAttr{
    cart_id: number;
    order_id: number;
}

@Table({tableName: 'cart_orders', createdAt: false, updatedAt: false})
export class CartOrder extends Model<CartOrder,CreateConnAttr>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
    id: number;

    @ForeignKey(()=> Carts)
    @Column({type: DataType.INTEGER})
    cart_id: number;

    @ForeignKey(()=> Orders)
    @Column({type: DataType.INTEGER})
    order_id: number;
}