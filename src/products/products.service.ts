import { Injectable } from '@nestjs/common';
import {Products} from "./products.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateProductDto} from "./dto/create-product.dto";
import {Descriptions} from "./des-prod.model";
import {FileService} from "../file/file.service";

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Products) private productsRepository: typeof Products,
                @InjectModel(Descriptions) private descriptionsRepository: typeof Descriptions,
                private fileService: FileService) {}

    async createProduct(dto: CreateProductDto, image: any){

        const fileName = await this.fileService.createFile(image)

        const des = {value: dto.description}
        const data = {
            name: dto.name,
            type_id: dto.type_id,
            description_id: await this.descriptionsRepository.create(des).then(i=>i.id),
            quantity: dto.quantity,
            image: fileName,
        }
        const prod = await this.productsRepository.create(data)
        return prod;
    }

    async getAll(){
        const prods = await this.productsRepository.findAll({include: {all:true}});
        return prods;
    }

    async getItemsTypeId(id: string){
        const items = await this.productsRepository.findAll({where: {type_id: id}})
        return items;
    }


}
