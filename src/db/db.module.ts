/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { dataBaseProvider } from './db.config.services'
@Module({
    imports: dataBaseProvider,
    controllers: [],
    providers: [],
    exports: dataBaseProvider
})
export class DbModule { }
