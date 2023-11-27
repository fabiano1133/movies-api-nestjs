import { CreateMovieDTO } from '../../DTOs/create-movie.dto';
import { Movies } from '../../entities/movies.entity';
import { IMoviesRepository } from '../IMoviesRepository';

export class MoviesRepositoryInMemory implements IMoviesRepository {
  movies: Movies[] = [];
  async findMovieById(id: string): Promise<Movies> {
    return this.movies.find((movie) => movie.id === id);
  }
  async findMovies(): Promise<Movies[]> {
    return this.movies;
  }
  async findMovieByTitle(title: string): Promise<Movies> {
    return this.movies.find((movie) => movie.title === title);
  }
  async createMovie(data: CreateMovieDTO, user_id: string): Promise<void> {
    const newMovie = new Movies();

    Object.assign(newMovie, {
      ...data,
      user_id,
    });

    this.movies.push(newMovie);
  }
  async updateMovie(id: string, data: any): Promise<void> {
    const movieIndex = this.movies.findIndex((movie) => movie.id === id);

    this.movies[movieIndex] = {
      ...this.movies[movieIndex],
      ...data,
    };
  }
  async deleteMovie(id: string): Promise<void> {
    const movieIndex = this.movies.findIndex((movie) => movie.id === id);

    this.movies.splice(movieIndex, 1);
  }
}
