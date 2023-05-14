import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {ProductsService} from "./products.service";
import {CreateProductDto} from "./dto/create-product.dto";
import {Products} from "./products.model";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";

@ApiTags('Товары')
@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {}

    @ApiOperation({summary: 'Создание товара'})
    @Roles("admin")
    @UseGuards(RolesGuard)
    @Post()
    createProduct (@Body() dto: CreateProductDto){
        return this.productsService.createProduct(dto)
    }

    @ApiOperation({summary: 'Получение всех товаров'})
    @Get()
    getAll(){
        return this.productsService.getAll();
    }

    @ApiOperation({summary: 'Получение всех товаров по id типа '})
    @Get('/:type_id')
    getItemsTypeId(@Param('type_id') id: string){
        return this.productsService.getItemsTypeId(id);
}
}
