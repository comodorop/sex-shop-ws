import { Product } from '../../domain/model/product.model'
import { EntitySchema } from 'typeorm'

export const ProductSchema = new EntitySchema<Product>({
    name: 'Product',
    target: Product,
    columns: {
        id: {
            type: String,
            primary: true,
            generated: 'uuid'
        },
        name: {
            type: String
        },
        description: {
            type: String
        },
        price: {
            type: Number
        }
    }
});
