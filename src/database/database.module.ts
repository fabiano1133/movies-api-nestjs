import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/account/infra/entities/account.entity';
import configuration from 'src/config/configuration';
import { Movies } from 'src/movies/infra/entities/movies.entity';

const config = configuration();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.database.host,
      port: config.database.port,
      username: config.database.username_db,
      password: config.database.password,
      database: config.database.database,
      entities: [User, Movies],
      synchronize: config.database.synchronize,
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
