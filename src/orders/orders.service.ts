import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Orders} from "./orders.model";

@Injectable()
export class OrdersService {

    constructor(@InjectModel(Orders) private OrderRepository: typeof Orders) {}




}
