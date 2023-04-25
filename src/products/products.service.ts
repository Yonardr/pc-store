import { Injectable } from '@nestjs/common';
import {Products} from "./products.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateProductDto} from "./dto/create-product.dto";
import {Descriptions} from "./des-prod.model";

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Products) private productsRepository: typeof Products,
                @InjectModel(Descriptions) private descriptionsRepository: typeof Descriptions,) {}

    async createProduct(dto: CreateProductDto){

        const prod = await this.productsRepository.create(dto)
        return prod;
    }

    async getAll(){
        const prods = await this.productsRepository.findAll({include: {all:true}});
        return prods;
    }

    // private async addDescription(dto: CreateProductDto){
    //     const des = await this.descriptionsRepository.create(dto.description)
    //     return des.id
    // }

}
