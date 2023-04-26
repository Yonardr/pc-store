import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Products} from "../products/products.model";
import {Characteristics} from "./characteristics.model";

@Table({tableName: 'product_characteristics', createdAt:false, updatedAt:false})
export class ProductsCharacteristics extends Model<ProductsCharacteristics>{

    @Column({type: DataType.INTEGER, primaryKey:true, autoIncrement:true, unique:true })
    id: number;

    @ForeignKey(()=> Products)
    @Column({type: DataType.INTEGER})
    product_id: number;

    @ForeignKey(()=> Characteristics)
    @Column({type: DataType.INTEGER})
    characteristics_id: number;

    @Column({type : DataType.STRING, allowNull: false})
    value: string;
}