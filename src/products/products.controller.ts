import {Body, Controller, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {ProductsService} from "./products.service";
import {CreateProductDto} from "./dto/create-product.dto";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {FileInterceptor} from "@nestjs/platform-express";

@ApiTags('Товары')
@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {
    }

    @ApiOperation({summary: 'Создание товара'})
    @Roles("admin")
    @UseGuards(RolesGuard)
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createProduct(@Body() dto: CreateProductDto,
                  @UploadedFile() image) {
        return this.productsService.createProduct(dto, image)
    }

    @ApiOperation({summary: 'Получение всех товаров'})
    @Get()
    getAll() {
        return this.productsService.getAll();
    }

    @ApiOperation({summary: 'Получение всех товаров по id типа '})
    @Get('/:type_id')
    getItemsTypeId(@Param('type_id') id: string) {
        return this.productsService.getItemsTypeId(id);
    }

    @ApiOperation({summary: 'Получение товара по id'})
    @Get('/id/:value')
    getItemsId(@Param('value') id: number) {
        return this.productsService.getItemsId(id);
    }
}
