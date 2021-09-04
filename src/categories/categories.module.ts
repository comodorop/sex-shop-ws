/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {CategorySchema} from './infraestructure/schema/category.schema'
import {CategoryController} from './infraestructure/controller/category.controller'
import {CategoryService} from './application/services/category.service'
import {CategoryRepository} from './infraestructure/repository/category.repository.postgres'

@Module({
    imports: [TypeOrmModule.forFeature([CategorySchema])],
    controllers: [CategoryController],
    providers: [
        {
            provide: 'baseCreateCategory',
            useClass: CategoryService
        },
        {
            provide: 'ICategoryRepository',
            useClass: CategoryRepository
          },
    ],
    exports: ['baseCreateCategory', 'ICategoryRepository']
})
export class CategoriesModule {}
