import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {ProductsService} from "./products.service";
import {CreateProductDto} from "./dto/create-product.dto";

@ApiTags('Товары')
@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {}

    @Post()
    createProduct (@Body() dto: CreateProductDto){
        return this.productsService.createProduct(dto)
    }

    @Get()
    getAll(){
        return this.productsService.getAll();
    }
}
