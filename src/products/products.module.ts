import {forwardRef, Module} from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Types} from "../types/types.model";
import {Products} from "./products.model";
import {Descriptions} from "./des-prod.model";
import {ProductsCharacteristics} from "../characteristics/products-characteristics.model";
import {Characteristics} from "../characteristics/characteristics.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";
import {FileModule} from "../file/file.module";



@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
      SequelizeModule.forFeature([Products,Types, Descriptions, ProductsCharacteristics, Characteristics,],),
      RolesModule,
      forwardRef(()=>AuthModule),
      FileModule
  ],
    exports: [
        ProductsService
    ]
})
export class ProductsModule {}
