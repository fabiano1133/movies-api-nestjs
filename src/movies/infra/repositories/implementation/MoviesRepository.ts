import { Injectable } from '@nestjs/common';
import { CreateMovieDTO } from '../../DTOs/create-movie.dto';
import { Movies } from '../../entities/movies.entity';
import { IMoviesRepository } from '../IMoviesRepository';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MoviesRepository implements IMoviesRepository {
  constructor(
    @InjectRepository(Movies)
    private moviesRepository: Repository<Movies>,
  ) {}

  async findMovies(): Promise<Movies[]> {
    return await this.moviesRepository.find();
  }

  async findMovieById(id: string): Promise<Movies> {
    const movie = await this.moviesRepository.findOne({
      where: {
        id,
      },
    });
    return movie;
  }
  async findMovieByTitle(title: string): Promise<Movies> {
    const movie = await this.moviesRepository.findOne({
      where: {
        title,
      },
    });
    return movie;
  }
  async createMovie(data: CreateMovieDTO, user_id: string): Promise<void> {
    const newMovie = this.moviesRepository.create({
      ...data,
      user_id,
    });

    await this.moviesRepository.save(newMovie);
  }
  async updateMovie(id: string, data: any): Promise<void> {
    await this.moviesRepository.update({ id }, data);
  }
  async deleteMovie(id: string): Promise<void> {
    await this.moviesRepository.delete({ id });
  }
}
