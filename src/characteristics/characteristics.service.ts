import {Injectable, UseGuards} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Characteristics} from "./characteristics.model";
import {CreateCharacteristicsDto} from "./dto/create-characteristics.dto";
import {ProductsCharacteristics} from "./products-characteristics.model";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";

@Injectable()
export class CharacteristicsService {
    constructor(@InjectModel(Characteristics) private characteristicsRepository : typeof Characteristics,
                @InjectModel(ProductsCharacteristics) private prodCharactRepository : typeof ProductsCharacteristics) {}

    @Roles("admin")
    @UseGuards(RolesGuard)
    async add(dto : CreateCharacteristicsDto){
        const createCharact = await this.characteristicsRepository.create({name: dto.name, value: dto.value})
        const addConn = await this.prodCharactRepository.create({characteristics_id: createCharact.id, product_id: dto.prod_id})
        return createCharact;
    }

    async getAllById(id: number){
        const item = this.characteristicsRepository.findByPk(id)
        return item;
    }
}
