import { FindConditions, UpdateResult } from 'typeorm'
import { FindManyOptions } from 'typeorm'
import { TransactionalRepository } from '../unitofwork/transactional.repository'
import { IRead } from './read.interface.repository'
import { IWrite } from './write.interface.repository'

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  constructor(
    protected repo: TransactionalRepository,
    protected entity: string
  ) {}

  public async save(item: T): Promise<T> {
    return this.repo.getRepository(this.entity).save(item)
  }
  updateOne(id: string, item: Partial<T>): Promise<UpdateResult> {
    return this.repo.getRepository(this.entity).update(id, item)
  }
  deleteOne(id: string): Promise<UpdateResult> {
    return this.repo.getRepository(this.entity).update(id, { isActive: false })
  }
  public async get(filters: FindManyOptions<T>): Promise<T[]> {
    return this.repo.getRepository<T>(this.entity).find(filters)
  }
  getOne(filters: FindConditions<T>): Promise<T> {
    return this.repo.getRepository<T>(this.entity).findOne(filters)
  }
}
