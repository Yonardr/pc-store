import {Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Carts} from "./carts.model";
import {UsersService} from "../users/users.service";
import {UsersCarts} from "./user-cart.model";
import {CreateCartDto} from "./dto/create-cart.dto";
import {CartGetDto} from "../characteristics/dto/cart-get.dto";
import {Model} from "sequelize-typescript";
import {GetCartDto} from "./dto/get-cart.dto";

@Injectable()
export class CartsService {

    constructor(@InjectModel(Carts) private cartsRepository : typeof Carts,
                @InjectModel(UsersCarts) private userCartsRepository: typeof UsersCarts,
                private userService: UsersService) {}


    async createCart(dto: CreateCartDto){
        try {
            const user_id = await this.userService.getUserByLogin(dto.user_login).then(i => i.id)
            const createCart = await this.cartsRepository.create({
                prod_id: dto.prod_id,
                quantity: dto.quantity
            }).then(i => i.id)
            const cartConnUser = await this.userCartsRepository.create({user_id: user_id, cart_id: createCart})
            return "success";
        }
        catch {
            throw new UnauthorizedException({message: "Что то пошло не так"});
        }
    }

    async getCart(dto: GetCartDto){
        try {
            const IdUser = await this.userService.getUserByLogin(dto.user_login).then(i => i.id);

            const allCartId = await this.userCartsRepository.findAll({where: {user_id: IdUser}}).then(i=> i)
            let arr = []
            for (const item of allCartId) {
                arr.push(await this.cartsRepository.findAll({where: {id: item.cart_id}}))
            }

            return arr;
        }
        catch {
            throw new UnauthorizedException({message: "Что то пошло не так или корзина пустая("})
        }
    }

    async getUserOfCartId(id: number) {
        const user_id = await this.userCartsRepository.findOne({where: {cart_id: id}}).then(i => i.user_id)
        return user_id;
    }

    async getCartById(id: number){
        const res = await this.cartsRepository.findOne({where: {id: id}})
        return res;
    }
}
