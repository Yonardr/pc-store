import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Carts} from "./carts.model";
import {User} from "../users/users.model";

@Table({tableName: 'user_carts', createdAt: false, updatedAt: false})
export class UsersCarts extends Model<UsersCarts>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Carts)
    @Column({type: DataType.INTEGER})
    cart_id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number;
}