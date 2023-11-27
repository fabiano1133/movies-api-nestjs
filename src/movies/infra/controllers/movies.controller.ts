import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { MoviesService } from 'src/movies/usecases/movies.service';
import { CreateMovieDTO } from '../DTOs/create-movie.dto';
import { Movies } from '../entities/movies.entity';
import { UpdateMovieDTO } from '../DTOs/update-movie.dto';
import { AuthGuard } from 'src/common/Guard/auth.guard';

@UseGuards(AuthGuard)
@Controller('v1/api/movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Post('create-movie')
  @HttpCode(HttpStatus.CREATED)
  async create(@Req() req: any, @Body() data: CreateMovieDTO): Promise<void> {
    const user_id = req.user.id;
    await this.moviesService.create(data, user_id);
  }

  @Get('movie/:id')
  @HttpCode(HttpStatus.OK)
  async getMovieById(@Param('id') id: string): Promise<Movies> {
    return await this.moviesService.getMovieById(id);
  }

  @UseGuards(AuthGuard)
  @Get('movies')
  @HttpCode(HttpStatus.OK)
  async findMovies(): Promise<Movies[]> {
    return await this.moviesService.findMovies();
  }

  @Put('update-movie/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Body() data: UpdateMovieDTO,
    @Param('id') id: string,
  ): Promise<void> {
    await this.moviesService.update(id, data);
  }

  @Delete('delete-movie/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.moviesService.delete(id);
  }
}
