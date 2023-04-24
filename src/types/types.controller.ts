import {Body, Controller, Get, Post} from '@nestjs/common';
import {TypesService} from "./types.service";
import {CreateTypeDto} from "./dto/create-type.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Types} from "./types.model";


@ApiTags('Типы товара (каталог)')
@Controller('types')
export class TypesController {

    constructor(private typesService: TypesService) {}

    @ApiOperation({summary: 'Создание типа'})
    @ApiResponse({status: 200, type: Types})
    @Post()
    createType(@Body() typeDto: CreateTypeDto){
        return this.typesService.createType(typeDto);
    }

    @ApiOperation({summary: 'Получение всех типов'})
    @ApiResponse({status: 200, type: [Types]})
    @Get()
    getAll(){
       return this.typesService.getTypes();
    }
}
