import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Products} from "../products/products.model";
import {Orders} from "./orders.model";

@Table({tableName: 'product_order', createdAt: false, updatedAt: false})
export class ProductOrder extends Model<ProductOrder>{

    @Column({type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true})
    id: number;

    @ForeignKey(() => Products)
    @Column({type: DataType.INTEGER})
    product_id: number;

    @ForeignKey(() => Orders)
    @Column({type: DataType.INTEGER})
    order_id: number;

    @Column({type: DataType.INTEGER})
    quantity: number;
}