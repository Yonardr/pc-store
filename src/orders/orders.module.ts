import {forwardRef, Module} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import {Orders} from "./orders.model";
import {CartOrder} from "./cart-order.model";
import {Carts} from "../carts/carts.model";
import {SequelizeModule} from "@nestjs/sequelize";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";
import {CartsModule} from "../carts/carts.module";
import {UsersModule} from "../users/users.module";
import {User} from "../users/users.model";
import {UserOrders} from "./user-orders.model";
import {ProductsModule} from "../products/products.module";

@Module({
  providers: [OrdersService],
  controllers: [OrdersController],
  imports: [
      SequelizeModule.forFeature([Orders, CartOrder, Carts, User, UserOrders]),
      RolesModule,
      CartsModule,
      UsersModule,
      ProductsModule,
      forwardRef(()=> AuthModule)
  ],
})
export class OrdersModule {}
