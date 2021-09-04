import { Category } from '../../domain/model/category.model'
import { EntitySchema } from 'typeorm'

export const CategorySchema = new EntitySchema<Category>({
    name: 'Category',
    target: Category,
    columns: {
        id: {
            type: String,
            primary: true,
            generated: 'uuid'
        },
        name: {
            type: String
        }
    }
});
