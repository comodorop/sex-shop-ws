
import { TypeOrmModule } from '@nestjs/typeorm'

export const dataBaseProvider = [
    TypeOrmModule.forRootAsync({
        imports: [],
        inject: [],
        async useFactory() {
            return {
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '123456',
                database: 'ecomerce',
                __dirname: '/../**/infraestructure/schema/*.schema{.ts,.js}',
                synchronize: true,
            }
        },
    })
]