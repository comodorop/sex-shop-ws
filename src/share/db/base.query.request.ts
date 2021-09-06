import { OrderBy } from "./order/order.by.model";

/**
 * Interface of generic query request.
 */
export interface BaseQueryRequest<T> {
    readonly take?: number;
    readonly skip?: number;
    readonly orderBy?: OrderBy<T>;
}