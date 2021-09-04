/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { Category } from 'src/categories/domain/model/category.model';
import { ICategoryRepository } from 'src/categories/domain/port/ICategoryRespository';
import { CreateCategoryDTO } from 'src/categories/dto/create.request.dto';
import { baseCreateCategory } from '../interfaces/base.createCategory.interface';

@Injectable()
export class CategoryService implements baseCreateCategory {

    constructor(@Inject('ICategoryRepository')
    private categoryRepository: ICategoryRepository) { }

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
