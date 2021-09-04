
import { IRead } from "src/share/repository/read.interface.repository";
import { IWrite } from "src/share/repository/write.interface.repository";
import { Category } from "../model/category.model";

export interface ICategoryRepository extends IWrite<Category>, IRead<Category>{}
