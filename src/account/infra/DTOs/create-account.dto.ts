import { ApiProperty } from '@nestjs/swagger';

export class CreateAccountDTO {
  id?: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
