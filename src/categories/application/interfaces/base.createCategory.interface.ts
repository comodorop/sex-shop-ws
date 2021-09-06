import { CategoryFilter } from "src/categories/domain/filter/category.filter";
import { CreateCategoryDTO } from "src/categories/dto/create.request.dto";
import { CreateCategoryResDto } from "src/categories/dto/create.response.dto";
import { OrderBy } from "src/share/db/order/order.by.model";
import { QueryPagination } from "src/share/db/pagination/QueryPagination";
import {Category} from '../../domain/model/category.model'

export interface baseCreateCategory {
    createCategory(create: CreateCategoryDTO): Promise<CreateCategoryDTO>
    getCompany (filters: CategoryFilter, query: QueryPagination, orderBy: OrderBy<Category>): Promise<CreateCategoryResDto[]>
}