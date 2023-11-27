import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateAccountDTO } from '../infra/DTOs/create-account.dto';
import { IUsersRepository } from '../infra/repositories/IUsersRepository';
import { User } from '../infra/entities/account.entity';
import { PasswordHashService } from 'src/ultils/providers/password-hash/password-hash.service';

@Injectable()
export class AccountService {
  constructor(
    @Inject('IUsersRepository')
    private usersRepository: IUsersRepository,

    private passwordHashService: PasswordHashService,
  ) {}

  async create(data: CreateAccountDTO): Promise<void> {
    try {
      const userExists = await this.getUserByEmail(data.email);

      if (userExists) throw new Error('E-mail allready exists');

      const passwordHash = this.passwordHashService.hashPassword(data.password);

      await this.usersRepository.createUser({
        ...data,
        password: passwordHash,
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.usersRepository.findUserById(id);
    return user;
  }
  async getUserByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findUserByEmail(email);
    return user;
  }
}
