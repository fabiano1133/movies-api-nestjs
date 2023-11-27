import { User } from '../../../account/infra/entities/account.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Movies {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  year: number;

  @Column()
  duration: number;

  @ManyToOne(() => User, (user) => user.movies, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  user_id: string;
}
