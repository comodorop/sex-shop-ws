export class Product {
    id: string
    name: string
    description: string
    price: Number
    colors:string

    constructor(
        name: string,
        description: string,
        price: Number,
        colors: string
    ) {
        this.name = name
        this.description = description
        this.price = price
        this.colors= colors
    }
}
