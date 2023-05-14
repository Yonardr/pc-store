import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {UsersCarts} from "./user-cart.model";
import {User} from "../users/users.model";

@Table({tableName: 'carts', updatedAt: false, createdAt: false})
export class Carts extends Model<Carts>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    prod_id: number;

    @Column({type: DataType.INTEGER})
    quantity: number;

    @BelongsToMany(()=> User, () => UsersCarts)
    users: User[]

}