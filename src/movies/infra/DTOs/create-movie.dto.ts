import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateMovieDTO {
  id?: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Titulo não pode ser vazio' })
  @IsString({ message: 'O campo Titulo deve ser um texo' })
  title: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Descrição não pode ser vazio' })
  @IsString({ message: 'O campo Descrição deve ser um texto' })
  description: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Ano não pode ser vazio' })
  @IsNumber({}, { message: 'O campo Ano deve ser um número' })
  year: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Duração não pode ser vazio' })
  @IsNumber({}, { message: 'O campo Duração deve ser um número' })
  duration: number;

  user_id: string;
}
