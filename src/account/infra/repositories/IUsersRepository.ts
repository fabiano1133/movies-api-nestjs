import { CreateAccountDTO } from '../DTOs/create-account.dto';
import { User } from '../entities/account.entity';

export interface IUsersRepository {
  findUserByEmail(email: string): Promise<User>;
  findUserById(id: string): Promise<User>;
  createUser(data: CreateAccountDTO): Promise<void>;
  updateUser(id: string, data: any): Promise<any>;
  deleteUser(id: string): Promise<void>;
}
