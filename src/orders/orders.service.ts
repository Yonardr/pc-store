import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Orders} from "./orders.model";
import {CreateOrderDto} from "./dto/create-order.dto";
import {CartOrder} from "./cart-order.model";
import {GetOrdersDto} from "./dto/get-orders.dto";
import {CartsService} from "../carts/carts.service";
import {UserOrders} from "./user-orders.model";
import {UsersService} from "../users/users.service";
import {ProductsService} from "../products/products.service";

@Injectable()
export class OrdersService {

    constructor(@InjectModel(Orders) private ordersRepository: typeof Orders,
                @InjectModel(CartOrder) private cartOrdersRepository: typeof CartOrder,
                @InjectModel(UserOrders) private userOrderRepository: typeof UserOrders,
                private cartService: CartsService,
                private userService: UsersService,
                private prodService : ProductsService) {}

    async create(dto: CreateOrderDto){
        const order = await this.ordersRepository.create({status: dto.status, price: dto.price}).then(i => i)
        let last_cart_id = 1;
        for (const n of dto.cart_id) {
            await this.cartOrdersRepository.create({cart_id: n, order_id: order.id})

            const prod_id = await this.cartService.getCartById(n).then(i=> i.prod_id);
            const quantity = await this.cartService.getCartById(n).then(i=> i.quantity);
            const q = await this.prodService.buyProd(prod_id, quantity)
            if(q === 'error') {
                await this.cartOrdersRepository.destroy({where: {cart_id: n, order_id: order.id}})
                return "Нужного кол-во товара нет в наличии"
            }
            last_cart_id = n;
        }
        const user_id = await this.cartService.getUserOfCartId(last_cart_id);
        await this.userOrderRepository.create({order_id: order.id, user_id: user_id})


        return order;
    }

    async getAll(dto: GetOrdersDto){
        const userId = await this.userService.getUserByLogin(dto.user_login).then(i=>i.id)
        const allOrder = await this.userOrderRepository.findAll({where: {user_id: userId}})
        const arr = []
        for(const item of allOrder){
            arr.push(await this.ordersRepository.findOne({where: {id: item.order_id}}))
        }
        return arr;
    }

    async getCartOfOrderId(id: number){
        const carts = await this.cartOrdersRepository.findAll({where: {order_id: id}})
        const arr = []
        for(const item of carts){
            arr.push(await this.cartService.getCartById(item.cart_id))
        }
        return arr;
    }

}
