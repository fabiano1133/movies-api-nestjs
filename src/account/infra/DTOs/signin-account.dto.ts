import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class SignInAccountDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'E-mail não pode ser vazio' })
  @IsEmail({}, { message: 'Informe um e-mail válido' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Senha não pode ser vazio' })
  password: string;
}
