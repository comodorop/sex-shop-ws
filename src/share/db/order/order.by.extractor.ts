import { Injectable } from "@nestjs/common";
import { OrderBy } from "./order.by.model";

@Injectable()
export class OrderByExtractor<T>{

    public extract(query: any): OrderBy<T> | undefined {
        return query.orderBy ? query!.orderBy : undefined;
    }
    
}