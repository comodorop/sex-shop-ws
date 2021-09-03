
import { Module, Global } from '@nestjs/common'
import { UnitOfWork } from './unitodwork.provider'
import { TransactionalRepository } from './transactional.repository'

@Global()
@Module({
    providers: [UnitOfWork, TransactionalRepository],
    exports: [UnitOfWork, TransactionalRepository]
})
export class UnitOfWorkModule { }