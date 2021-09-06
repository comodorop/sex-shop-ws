import { Injectable } from "@nestjs/common";
import { BaseQueryBuilder } from "src/share/db/base.query.builder";
import { OrderBy } from "src/share/db/order/order.by.model";
import { QueryPagination } from "src/share/db/pagination/QueryPagination";
import { FindManyOptions } from "typeorm";

@Injectable()
export class FindOptionsBuilder<T> implements BaseQueryBuilder {

    #queryFilters: FindManyOptions;

    constructor() {
        this.#queryFilters = {};
    }

    public addWhere(filters: T): FindOptionsBuilder<T> {
        this.#queryFilters = { where : {...(Object.entries(filters).reduce((a,[k,v]) => (v === undefined ? a : (a[k]=v, a)), {}))} };
        return this;
    }

    public addPagination(pagination: QueryPagination): FindOptionsBuilder<T> {
        this.#queryFilters = { ...this.#queryFilters, ...pagination }
        return this;
    }

    public addOrderBy(orderBY: OrderBy<T>): FindOptionsBuilder<T> {
        this.#queryFilters = { ...this.#queryFilters, order: { ...orderBY } }
        return this;
    }

    public buildQuery(): FindManyOptions {
        return this.#queryFilters;
    }
}



