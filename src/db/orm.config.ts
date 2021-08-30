import { ConnectionOptions } from 'typeorm'
import * as dotenv from 'dotenv'
dotenv.config()

const config: ConnectionOptions = {
  type: 'postgres',
  synchronize: true,
  host: 'localhost',
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/infraestructure/schema/*.schema{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: '/src/db/migrations'
  }
}

export default config
