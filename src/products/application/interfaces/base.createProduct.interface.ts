import { CreateProductDTO } from "src/products/dto/create.request.dto";

export interface BaseCreateProduct{
    createProduct(createDto: CreateProductDTO): Promise<CreateProductDTO>
}