import { CreateCategoryDTO } from "src/categories/dto/create.request.dto";

export interface baseCreateCategory {
    createCategory(create: CreateCategoryDTO): Promise<CreateCategoryDTO>
}