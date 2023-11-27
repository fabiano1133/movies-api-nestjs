import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { DatabaseModule } from './database/database.module';
import { AccountModule } from './account/account.module';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
import { TokenGenerateModule } from './ultils/providers/token-generate/token-generate.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import configuration from './config/configuration';

const config = configuration();

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: config.cache.host,
      port: config.cache.port,
    }),
    TokenGenerateModule,
    HealthModule,
    DatabaseModule,
    AccountModule,
    MoviesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
