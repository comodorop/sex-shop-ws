/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { IProductRepository } from 'src/products/domain/port/products.repository.repository';
import { CreateProductDTO } from 'src/products/dto/create.request.dto';
import { BaseCreateProduct } from '../interfaces/base.createProduct.interface';
import {Product} from'../../domain/model/product.model'

@Injectable()
export class ProductsService implements BaseCreateProduct {

    constructor(@Inject('IProductRepository') 
    private productRepository:IProductRepository){}


    async createProduct(createDto: CreateProductDTO): Promise<CreateProductDTO> {
        const product = new Product(
            createDto.name,createDto.description, createDto.price
        )
        this.productRepository.save(product)
        return createDto
    }
}
