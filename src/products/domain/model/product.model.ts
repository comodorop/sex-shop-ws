export class Product {
    id: string
    name: string
    description: string
    price: Number

    constructor(
        name: string,
        description: string,
        price: Number,
    ) {
        this.name = name
        this.description = description
        this.price = price
    }
}
