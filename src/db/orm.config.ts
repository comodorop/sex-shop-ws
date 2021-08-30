import { ConnectionOptions } from 'typeorm'
import * as dotenv from 'dotenv'
dotenv.config()

const config: ConnectionOptions = {
  type: 'postgres',
  synchronize: true,
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'ecomerce',
  entities: [__dirname + '/../**/infraestructure/schema/*.schema{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: '/src/db/migrations'
  }
}

export default config
