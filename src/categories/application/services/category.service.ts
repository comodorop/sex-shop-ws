/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { CategoryFilter } from 'src/categories/domain/filter/category.filter';
import { Category } from 'src/categories/domain/model/category.model';
import { ICategoryRepository } from 'src/categories/domain/port/ICategoryRespository';
import { CreateCategoryDTO } from 'src/categories/dto/create.request.dto';
import { CreateCategoryResDto } from 'src/categories/dto/create.response.dto';
import { OrderBy } from 'src/share/db/order/order.by.model';
import { QueryPagination } from 'src/share/db/pagination/QueryPagination';
import { baseCreateCategory } from '../interfaces/base.createCategory.interface';

@Injectable()
export class CategoryService implements baseCreateCategory {

    constructor(@Inject('ICategoryRepository')
    private categoryRepository: ICategoryRepository) { }
    getCompany(filters: CategoryFilter, query: QueryPagination, orderBy: OrderBy<Category>): Promise<CreateCategoryResDto[]> {
        throw new Error('Method not implemented.');
    }




    async createCategory(createDTO: CreateCategoryDTO): Promise<CreateCategoryDTO> {
        const category = new Category(
            createDTO.name)
        try {
            let data = await this.categoryRepository.save(category)
        } catch (error) {
            console.log(error)
        }

        return createDTO
    }

}
