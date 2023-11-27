import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { DatabaseModule } from './database/database.module';
import { AccountModule } from './account/account.module';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
import { TokenGenerateModule } from './ultils/providers/token-generate/token-generate.module';

@Module({
  imports: [
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
