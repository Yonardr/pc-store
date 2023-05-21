import {Body, Controller, Get, ParseArrayPipe, Post, Query} from '@nestjs/common';
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

    @Get()
    get(@Body() dto : GetOrdersDto){
        return this.orderService.getAll(dto);
    }

    @Get('/id')
    getDataOrderById(@Body() dto: GetDataOrderDto){
        return this.orderService.getCartOfOrderId(dto.id);
    }
}
