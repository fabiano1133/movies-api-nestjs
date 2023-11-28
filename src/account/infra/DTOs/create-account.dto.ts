import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsNotEmpty,
} from 'class-validator';

export class CreateAccountDTO {
  id?: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @IsString({ message: 'O campo Nome deve ser um texo' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'E-mail não pode ser vazio' })
  @IsEmail({}, { message: 'Informe um E-mail válido' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Senha não pode ser vazio' })
  @IsString({ message: 'O campo Senha deve ser um texto' })
  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
  @MaxLength(20, { message: 'A senha deve ter no máximo 20 caracteres' })
  password: string;
}
