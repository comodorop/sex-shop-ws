/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from 'src/products/dto/create.request.dto';
import { BaseCreateProduct } from '../interfaces/base.createProduct.interface';

@Injectable()
export class ProductsService implements BaseCreateProduct {


    async createProduct(createDto: CreateProductDTO): Promise<CreateProductDTO> {
        return createDto
    }
}
