import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {Carts} from "../carts/carts.model";
import {UsersCarts} from "../carts/user-cart.model";

interface UserCreationAttrs{
    login: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
    id: number;

    @ApiProperty({example: 'islamloh', description: 'тоже типо уникальная, логин'})
    @Column({type: DataType.STRING, unique:true, allowNull:false})
    login: string;

    @ApiProperty({example: 'i123', description: 'пароль'})
    @Column({type: DataType.STRING, allowNull:false})
    password: string;

    @BelongsToMany(()=> Role, ()=> UserRoles)
    roles : Role[];

    @BelongsToMany(()=> Carts, ()=> UsersCarts)
    carts: Carts[];
}