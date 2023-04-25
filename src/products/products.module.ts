import {forwardRef, Module} from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Types} from "../types/types.model";
import {Products} from "./products.model";
import {Descriptions} from "./des-prod.model";


@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
      SequelizeModule.forFeature([Products,Types, Descriptions],),
  ]
})
export class ProductsModule {}
