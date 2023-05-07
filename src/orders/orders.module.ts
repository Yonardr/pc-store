import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Products} from "../products/products.model";
import {ProductOrder} from "./product-order.model";
import {Orders} from "./orders.model";

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
      SequelizeModule.forFeature([Products, ProductOrder, Orders]),

  ]
})
export class OrdersModule {}
