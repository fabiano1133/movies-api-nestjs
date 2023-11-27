import { Movies } from '../../../movies/infra/entities/movies.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Movies, (movie) => movie.user, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  movies: Movies[];
}
