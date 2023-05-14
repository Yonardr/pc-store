import {forwardRef, Module} from '@nestjs/common';
import { CharacteristicsService } from './characteristics.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Products} from "../products/products.model";
import {ProductsCharacteristics} from "./products-characteristics.model";
import { CharacteristicsController } from './characteristics.controller';
import {Characteristics} from "./characteristics.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";

@Module({
  providers: [CharacteristicsService],
  imports: [
      SequelizeModule.forFeature([Products, ProductsCharacteristics, Characteristics]),
      RolesModule,
      forwardRef(()=>AuthModule)
  ],
  controllers: [CharacteristicsController]
})
export class CharacteristicsModule {}
