import {Body, Controller, Get, Param, ParseArrayPipe, Post, Query} from '@nestjs/common';
import {OrdersService} from "./orders.service";
import {CreateOrderDto} from "./dto/create-order.dto";
import {GetOrdersDto} from "./dto/get-orders.dto";
import {GetDataOrderDto} from "./dto/get-data-order.dto";

@Controller('orders')
export class OrdersController {

    constructor(private orderService: OrdersService) {}

    @Post()
    create(@Body() dto: CreateOrderDto){
        return this.orderService.create(dto);
    }

    @Get('/:login')
    get(@Param('login') value: string){
        return this.orderService.getAll(value);
    }

    @Get('/:id')
    getDataOrderById(@Param('id') value: number){
        return this.orderService.getCartOfOrderId(value);
    }
}
