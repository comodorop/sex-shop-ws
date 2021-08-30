import { ProductsService } from './application/services/products.service';
import { ProductsController } from './infraestructure/controller/products.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        ProductsController,],
    providers: [
        {
            provide: 'BaseCreateProduct',
            useClass: ProductsService
        }
    ],
    exports: ['BaseCreateProduct']
})
export class ProductsModule { }
