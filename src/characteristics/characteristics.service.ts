import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Characteristics} from "./characteristics.model";
import {CreateCharacteristicsDto} from "./dto/create-characteristics.dto";

@Injectable()
export class CharacteristicsService {
    constructor(@InjectModel(Characteristics) private characteristicsRepository : typeof Characteristics) {}

    async create(dto : CreateCharacteristicsDto){
        const item = this.characteristicsRepository.create(dto)
        return item;
    }
    async getAll(){
        const items = this.characteristicsRepository.findAll()
        return items;
    }
    async getByIdItem(id: number){
        const item = this.characteristicsRepository.findByPk(id)
        return item;
    }
}
