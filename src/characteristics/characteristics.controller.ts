import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateCharacteristicsDto} from "./dto/create-characteristics.dto";
import {CharacteristicsService} from "./characteristics.service";

@Controller('characteristics')
export class CharacteristicsController {

    constructor(private characteristics: CharacteristicsService) {}

    @Post()
    create(@Body() dto: CreateCharacteristicsDto){
        return this.characteristics.create(dto);
    }

    @Get('/all')
    getAll(){
        return this.characteristics.getAll();
    }

    @Get('/:id')
    getById(@Param('id') id: number ){
        return this.characteristics.getByIdItem(id)
    }

}
