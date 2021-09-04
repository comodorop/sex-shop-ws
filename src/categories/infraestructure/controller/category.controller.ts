/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Inject, Post } from '@nestjs/common';
import { baseCreateCategory } from 'src/categories/application/interfaces/base.createCategory.interface';
import { CreateCategoryDTO } from 'src/categories/dto/create.request.dto';
import { UnitOfWork } from 'src/share/unitofwork/unitodwork.provider';

@Controller()
export class CategoryController {

    constructor(
        @Inject('baseCreateCategory')
        private readonly baseCreateCategory: baseCreateCategory,
        private uof: UnitOfWork
    ) {

    }

    @Post('category')
    public async addCategory(@Body() createCategoryDTO: CreateCategoryDTO) {
        let data = await this.uof.withTransaction(() =>
            this.baseCreateCategory.createCategory(createCategoryDTO))

        return { data: data, message: 'Successfully created' }
    }

    
}


