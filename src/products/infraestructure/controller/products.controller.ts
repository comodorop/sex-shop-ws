/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Inject, Post } from '@nestjs/common';
import { BaseCreateProduct } from 'src/products/application/interfaces/base.createProduct.interface';
import { CreateProductDTO } from 'src/products/dto/create.request.dto';
import { UnitOfWork } from '../../../share/unitofwork/unitodwork.provider'

@Controller()
export class ProductsController {

    constructor(
        @Inject('BaseCreateProduct')
        private readonly baseCreateCompany: BaseCreateProduct,
        private uof: UnitOfWork
    ) {

    }

    @Post('company')
    public async addCompany(@Body() createProductDTO: CreateProductDTO) {
        console.log(createProductDTO)
        let data = await this.uof.withTransaction(() =>
            this.baseCreateCompany.createProduct(createProductDTO))

        return { data: data, message: 'Successfully created' }
    }

}
