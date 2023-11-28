import { ApiProperty } from '@nestjs/swagger';

export class UpdateMovieDTO {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  year: number;

  @ApiProperty()
  duration: number;
}
