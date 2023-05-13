import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { TypesModule } from './types/types.module';
import {Products} from "./products/products.model";
import {Types} from "./types/types.model";
import {Descriptions} from "./products/des-prod.model";
import { CharacteristicsModule } from './characteristics/characteristics.module';
import { OrdersModule } from './orders/orders.module';
import {ProductOrder} from "./orders/product-order.model";
import {Orders} from "./orders/orders.model";

@Module({
    controllers: [],
    providers: [],
    imports:[
        ConfigModule.forRoot({
            envFilePath : `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Products, Types, Descriptions, Orders, ProductOrder],
            autoLoadModels:true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        ProductsModule,
        TypesModule,
        CharacteristicsModule,
        OrdersModule,
    ]
})
export class AppModule{

}