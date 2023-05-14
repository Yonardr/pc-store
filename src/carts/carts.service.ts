import {Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Carts} from "./carts.model";
import {UsersService} from "../users/users.service";
import {UsersCarts} from "./user-cart.model";
import {CreateCartDto} from "./dto/create-cart.dto";
import {CartGetDto} from "../characteristics/dto/cart-get.dto";
import {Model} from "sequelize-typescript";

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

    async getCart(dto: CartGetDto){
        try {
            //const IdUser = await this.userService.getUserByLogin(dto.login).then(i => i.id);

            //const allCartId = await this.userCartsRepository.findAll({where: {user_id: IdUser}})
            //allCartId.forEach((item)=> item.cart_id)
            //const viewCart = await this.cartsRepository.findAll({include: [{model: UsersCarts, where: {user_id: 1}}]}).then(i=>i)
            //return viewCart;
        }
        catch {
            throw new UnauthorizedException({message: "Что то пошло не так или корзина пустая("})
        }
    }


}
