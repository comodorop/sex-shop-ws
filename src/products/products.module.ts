import { ProductsService } from './application/services/products.service';
import { ProductsController } from './infraestructure/controller/products.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ProductRepository } from './infraestructure/repository/product.repository.postgres';
import { ProductSchema } from './infraestructure/schema/product.schema';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ProductSchema])],
    controllers: [
        ProductsController,],
    providers: [
        {
            provide: 'BaseCreateProduct',
            useClass: ProductsService
        },
        {
            provide: 'IProductRepository',
            useClass: ProductRepository
          },
    ],
    exports: ['BaseCreateProduct', 'IProductRepository']
})
export class ProductsModule { }
