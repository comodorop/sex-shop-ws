import { Injectable } from "@nestjs/common";
import { QueryPagination } from "./QueryPagination";

@Injectable()
export class QueryExtractor{

    public extractPagination(query: any): QueryPagination {
        let objQueryPagination= new QueryPagination(query.take ? Number(query.take): 0, query.skip ? Number(query.skip): 0);
        return objQueryPagination
    }
    
}