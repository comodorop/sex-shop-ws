
import { Module, Global } from '@nestjs/common'
import {UnitOfWork} from './unitodwork.provider'

@Global()
@Module({
providers:[UnitOfWork],
exports:[UnitOfWork]
})
export class UnitOfWorkModule{}