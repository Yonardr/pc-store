import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Types} from "./types.model";
import {CreateTypeDto} from "./dto/create-type.dto";

@Injectable()
export class TypesService {

    constructor(@InjectModel(Types) private typesRepository: typeof Types) {}

    async createType(dto: CreateTypeDto){
        const type = await this.typesRepository.create(dto);
        return type;
    }

    async getTypes(){
        const types = await this.typesRepository.findAll();
        return types;
    }
}
