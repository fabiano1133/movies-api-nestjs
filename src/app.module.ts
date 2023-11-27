import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { DatabaseModule } from './database/database.module';
import { AccountModule } from './account/account.module';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
import { TokenGenerateModule } from './ultils/providers/token-generate/token-generate.module';
import { CacheModule } from '@nestjs/cache-manager';

import configuration from './config/configuration';

const config = configuration();

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      url: config.cache.url,
      ttl: config.cache.ttl,
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
