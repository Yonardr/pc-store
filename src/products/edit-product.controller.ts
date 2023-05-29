import {Body, Controller, Get, Param, Patch, Post, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {ProductsService} from "./products.service";
import {CreateProductDto} from "./dto/create-product.dto";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {FileInterceptor} from "@nestjs/platform-express";
import {EditProdDto} from "./dto/edit-prod.dto";

@ApiTags('Редакктирование товаров')
@Controller('edit-product')
export class EditProductController {

    constructor(private productsService: ProductsService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createProduct(@Body() dto: EditProductController,
                  @UploadedFile() image) {
        return this.productsService.editQuantity(dto, image)
    }
}
