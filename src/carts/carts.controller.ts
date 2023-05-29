import {Body, Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import {CartsService} from "./carts.service";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {CreateCartDto} from "./dto/create-cart.dto";
import {ApiTags} from "@nestjs/swagger";
import {CartGetDto} from "../characteristics/dto/cart-get.dto";
import {GetCartDto} from "./dto/get-cart.dto";

@ApiTags("Корзина для данка, damnnnnnnnn")
@Controller('carts')
export class CartsController {

    constructor(private cartService: CartsService) {}

    @Post()
    create(@Body() dto : CreateCartDto){
        return this.cartService.createCart(dto)
    }

    //@Roles("user", "admin")
    //@UseGuards(RolesGuard)
    @Get('/:value')
    get(@Param('value') value: string){
        return this.cartService.getCart(value);
    }

    @Delete('/id/:value')
    delete(@Param('value') value: number){
        return this.cartService.deleteCartById(value);
    }
}
