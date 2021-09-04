import { CategoryService } from './categories/application/services/category.service';
import { CategoryController } from './categories/infraestructure/controller/category.controller';
import { CategoriesModule } from './categories/categories.module';
import { DbModule } from './db/db.module';
import { ProductsModule } from './products/products.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnitOfWorkModule } from './share/unitofwork/unitofwork.module'

@Module({
  imports: [
    CategoriesModule,
    DbModule,
    ProductsModule,
    UnitOfWorkModule],
  controllers: [
    CategoryController, AppController],
  providers: [
    CategoryService, AppService],
})
export class AppModule { }
