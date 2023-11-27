import { Injectable } from '@nestjs/common';
import { SignInAccountDTO } from 'src/account/infra/DTOs/signin-account.dto';
import { AccountService } from 'src/account/usecases/account.service';
import configuration from 'src/config/configuration';
import { AppError } from 'src/ultils/error/AppError';
import { PasswordHashService } from 'src/ultils/providers/password-hash/password-hash.service';
import { TokenGenerate } from 'src/ultils/providers/token-generate/token-generate.service';

export interface IResponseToken {
  access_token: string;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: AccountService,
    private passwordHashService: PasswordHashService,
    private tokenGenerateService: TokenGenerate,
    private appError: AppError,
  ) {}

  async signIn(data: SignInAccountDTO): Promise<IResponseToken> {
    try {
      const user = await this.usersService.getUserByEmail(data.email);

      if (!user) throw new Error('Email or Password Incorrect!');

      const passwordMatch = this.passwordHashService.comparePassword(
        data.password,
        user.password,
      );

      if (!passwordMatch) throw new Error('Email or Password Incorrect!');

      const payload = {
        id: user.id,
        email: user.email,
      };

      const token = this.tokenGenerateService.generateToken(
        payload,
        configuration().jwt.secret,
        configuration().jwt.expiresIn,
      );

      return {
        access_token: token,
      };
    } catch (error) {
      await this.appError.emailOrPasswordIncorrect(error.message);
    }
  }
}
