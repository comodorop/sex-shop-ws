export class QueryPagination{
    readonly take: number
    readonly skip: number
    constructor(take: number, skip: number){
        this.take = take;
        this.skip = skip;
    }
}