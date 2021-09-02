import { DbModule } from './db/db.module';
import { ProductsModule } from './products/products.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UnitOfWorkModule} from './share/unitofwork/unitofwork.module'

@Module({
  imports: [
    DbModule,
    ProductsModule,
    UnitOfWorkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
