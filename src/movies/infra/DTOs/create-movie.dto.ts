import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDTO {
  id?: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  year: number;

  @ApiProperty()
  duration: number;

  @ApiProperty()
  user_id: string;
}
