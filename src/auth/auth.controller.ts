import { Body, Controller, Post } from '@nestjs/common';
import { AuthService, IResponseToken } from './auth.service';
import { SignInAccountDTO } from 'src/account/infra/DTOs/signin-account.dto';

@Controller('v1/api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  async signin(@Body() data: SignInAccountDTO): Promise<IResponseToken> {
    const userToken = await this.authService.signIn(data);
    return userToken;
  }
}
