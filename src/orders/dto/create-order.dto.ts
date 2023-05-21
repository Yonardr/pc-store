export class CreateOrderDto{
    readonly cart_id: number[];
    readonly status: string;
    readonly price: number;
}