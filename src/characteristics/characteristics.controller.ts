import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateCharacteristicsDto} from "./dto/create-characteristics.dto";
import {CharacteristicsService} from "./characteristics.service";
import {ApiTags} from "@nestjs/swagger";

@ApiTags("Характеристики")
@Controller('characteristics')
export class CharacteristicsController {

    constructor(private characteristics: CharacteristicsService) {}

    @Post()
    add(@Body() dto: CreateCharacteristicsDto){
        return this.characteristics.add(dto);
    }


    @Get('/:id')
    getAllById(@Param('id') id: number ){
        return this.characteristics.getAllById(id)
    }

}
