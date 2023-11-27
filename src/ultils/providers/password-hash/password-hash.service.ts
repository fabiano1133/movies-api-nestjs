import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordHashService {
  hashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
  }

  comparePassword(password: string, passwordHash: string): boolean {
    const isValid = bcrypt.compareSync(password, passwordHash);

    return isValid;
  }
}
