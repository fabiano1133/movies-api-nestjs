import { CreateMovieDTO } from '../DTOs/create-movie.dto';
import { Movies } from '../entities/movies.entity';

export interface IMoviesRepository {
  findMovieById(id: string): Promise<Movies>;
  findMovies(): Promise<Movies[]>;
  findMovieByTitle(title: string): Promise<Movies>;
  createMovie(data: CreateMovieDTO, user_id: string): Promise<void>;
  updateMovie(id: string, data: any): Promise<void>;
  deleteMovie(id: string): Promise<void>;
}
