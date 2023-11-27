import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MoviesService } from './usecases/movies.service';
import { MoviesController } from './infra/controllers/movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from './infra/entities/movies.entity';
import { MoviesRepository } from './infra/repositories/implementation/MoviesRepository';
import { AppError } from 'src/ultils/error/AppError';
import { TokenGenerateModule } from 'src/ultils/providers/token-generate/token-generate.module';
import { GetUserId } from 'src/common/Middlewares/get-user-id.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Movies]), TokenGenerateModule],
  providers: [
    MoviesService,
    AppError,
    {
      provide: 'IMoviesRepository',
      useClass: MoviesRepository,
    },
  ],
  controllers: [MoviesController],
})
export class MoviesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GetUserId).forRoutes('v1/api/movies/create-movie');
  }
}
