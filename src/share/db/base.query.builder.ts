import { FindManyOptions }from 'typeorm';


/**
 * Interface of generic query builder.
 */
export interface BaseQueryBuilder {
    /**
     *  Build a typeorm query with the given filter element
     */
    buildQuery(): FindManyOptions;
}
