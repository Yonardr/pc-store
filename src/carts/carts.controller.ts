import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {CartsService} from "./carts.service";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {CreateCartDto} from "./dto/create-cart.dto";
import {ApiTags} from "@nestjs/swagger";
import {CartGetDto} from "../characteristics/dto/cart-get.dto";

@ApiTags("Корзина для данка, damnnnnnnnn")
@Controller('carts')
export class CartsController {

    constructor(private cartService: CartsService) {}

    @Post()
    create(@Body() dto : CreateCartDto){
        return this.cartService.createCart(dto)
    }

    @Roles("user", "admin")
    @UseGuards(RolesGuard)
    @Get()
    get(@Body() dto: CartGetDto){
        return this.cartService.getCart(dto);
    }
}
