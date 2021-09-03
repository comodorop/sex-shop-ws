import { Injectable } from "@nestjs/common";
import { IProductRepository } from "src/products/domain/port/products.repository.repository";
import { BaseRepository } from "src/share/repository/abstract.repository";
import { TransactionalRepository } from "src/share/unitofwork/transactional.repository";
import {Product} from "../../domain/model/product.model"

@Injectable()
export class ProductRepository extends BaseRepository<Product> implements IProductRepository{

    constructor(transRepo: TransactionalRepository){
        super(transRepo, 'Product')
    }

}