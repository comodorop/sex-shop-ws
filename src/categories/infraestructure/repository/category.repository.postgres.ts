import { Injectable } from "@nestjs/common";
import { ICategoryRepository } from "../../domain/port/ICategoryRespository";
import {BaseRepository} from '../../../share/repository/abstract.repository'
import { TransactionalRepository } from "../../../share/unitofwork/transactional.repository";
import {Category} from '../../domain/model/category.model'

@Injectable()
export class CategoryRepository extends BaseRepository<Category> implements ICategoryRepository{

    constructor(transRepo: TransactionalRepository){
        super(transRepo, 'Category')
    }

}