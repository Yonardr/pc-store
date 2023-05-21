import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {Orders} from "./orders.model";

@Table({tableName: 'user_orders', updatedAt: false, createdAt: false})
export class UserOrders extends Model<UserOrders>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number;

    @ForeignKey(() => Orders)
    @Column({type: DataType.INTEGER})
    order_id: number;
}