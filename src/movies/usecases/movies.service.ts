import { Inject, Injectable } from '@nestjs/common';
import { IMoviesRepository } from '../infra/repositories/IMoviesRepository';
import { CreateMovieDTO } from '../infra/DTOs/create-movie.dto';
import { Movies } from '../infra/entities/movies.entity';
import { UpdateMovieDTO } from '../infra/DTOs/update-movie.dto';
import { AppError } from '../../ultils/error/AppError';

@Injectable()
export class MoviesService {
  constructor(
    @Inject('IMoviesRepository')
    private readonly moviesRepository: IMoviesRepository,
    private appError: AppError,
  ) {}
  async create(data: CreateMovieDTO, user_id: string): Promise<void> {
    try {
      const titleInUse = await this.moviesRepository.findMovieByTitle(
        data.title,
      );

      if (titleInUse) throw new Error('Title already in use!');

      await this.moviesRepository.createMovie(data, user_id);
    } catch (error) {
      await this.appError.movieNotFound(error.message);
    }
  }

  async getMovieById(id: string): Promise<Movies> {
    try {
      const movie = await this.moviesRepository.findMovieById(id);

      if (!movie) throw new Error('Movie not found!');

      return movie;
    } catch (error) {
      await this.appError.movieNotFound(error.message);
    }
  }

  async findMovies(): Promise<Movies[]> {
    return await this.moviesRepository.findMovies();
  }

  async update(id: string, data: UpdateMovieDTO): Promise<void> {
    try {
      const movie = await this.getMovieById(id);

      if (!movie) throw new Error('Movie not found!');

      await this.moviesRepository.updateMovie(id, data);
    } catch (error) {
      await this.appError.movieNotFound(error.message);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const movie = await this.getMovieById(id);

      if (!movie) throw new Error('Movie not found!');

      await this.moviesRepository.deleteMovie(id);
    } catch (error) {
      await this.appError.movieNotFound(error.message);
    }
  }
}
