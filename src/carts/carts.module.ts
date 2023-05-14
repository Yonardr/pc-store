import {forwardRef, Module} from '@nestjs/common';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {UsersCarts} from "./user-cart.model";
import {Carts} from "./carts.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";
import {UsersModule} from "../users/users.module";

@Module({
  controllers: [CartsController],
  providers: [CartsService],
  imports:[
    SequelizeModule.forFeature([User, UsersCarts, Carts]),
    RolesModule,
      UsersModule,
    forwardRef(()=>AuthModule)
  ]
})
export class CartsModule {}
