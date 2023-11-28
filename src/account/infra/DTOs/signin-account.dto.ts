import { ApiProperty } from '@nestjs/swagger';

export class SignInAccountDTO {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
