import { Injectable } from '@nestjs/common';
import { CreateAccountDTO } from '../../DTOs/create-account.dto';
import { User } from '../../entities/account.entity';
import { IUsersRepository } from '../IUsersRepository';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: {
        email,
      },
    });
    return user;
  }
  async findUserById(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: {
        id,
      },
      relations: ['movies'],
    });
    return user;
  }
  async createUser(data: CreateAccountDTO): Promise<void> {
    const newUser = this.usersRepository.create(data);

    await this.usersRepository.save(newUser);
  }
  async updateUser(id: string, data: any): Promise<void> {
    await this.usersRepository.update({ id }, data);
  }
  async deleteUser(id: string): Promise<void> {
    await this.usersRepository.delete({ id });
  }
}
