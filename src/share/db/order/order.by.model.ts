export declare enum Order {
    ASC = "ASC",
    DESC = "DESC"
}
export declare class OrderBy<T> {
    readonly [x: string]:  1 | "ASC" | "DESC" | -1;
    constructor(field: 1 | "ASC" | "DESC" | -1);
}
