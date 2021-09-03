import { IRead } from "src/share/repository/read.interface.repository";
import { IWrite } from "src/share/repository/write.interface.repository";
import { Product } from "../model/product.model";

export interface IProductRepository extends IWrite<Product>, IRead<Product>{}
