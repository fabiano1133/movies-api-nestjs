import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './usecases/movies.service';
import { MoviesRepositoryInMemory } from './infra/repositories/InMemory/MoviesRepositoryInMemory';

describe('MoviesService', () => {
  let service: MoviesService;
  let moviesRepositoryInMemory: MoviesRepositoryInMemory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesService,
        {
          provide: 'IMoviesRepository',
          useValue: moviesRepositoryInMemory,
        },
      ],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
    moviesRepositoryInMemory = module.get<MoviesRepositoryInMemory>(
      MoviesRepositoryInMemory,
    );
  });

  it('should create a movie', async () => {
    const movieData = {
      title: 'any_title',
      description: 'any_description',
      year: 1990,
      duration: 120,
      user_id: 'any_user_id',
    };

    await service.create(movieData, movieData.user_id);

    const movie = await moviesRepositoryInMemory.findMovieById('any_id');

    console.log(movie);
  });
});
