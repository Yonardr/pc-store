import { Module } from '@nestjs/common';
import { CharacteristicsService } from './characteristics.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Products} from "../products/products.model";
import {ProductsCharacteristics} from "./products-characteristics.model";
import { CharacteristicsController } from './characteristics.controller';
import {Characteristics} from "./characteristics.model";

@Module({
  providers: [CharacteristicsService],
  imports: [
      SequelizeModule.forFeature([Products, ProductsCharacteristics, Characteristics])
  ],
  controllers: [CharacteristicsController]
})
export class CharacteristicsModule {}
