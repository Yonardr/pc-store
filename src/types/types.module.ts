import { Module } from '@nestjs/common';
import { TypesController } from './types.controller';
import { TypesService } from './types.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Types} from "./types.model";
import {Products} from "../products/products.model";

@Module({
  controllers: [TypesController],
  providers: [TypesService],
  imports : [SequelizeModule.forFeature([Types, Products]),],
})
export class TypesModule {}
