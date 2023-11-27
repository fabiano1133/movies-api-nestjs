import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import configuration from 'src/config/configuration';
import { AppError } from 'src/ultils/error/AppError';

import { TokenGenerate } from 'src/ultils/providers/token-generate/token-generate.service';

const config = configuration();

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: TokenGenerate,
    private appError: AppError,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();

      const token = this.extractTokenFromHeader(request);

      if (!token) throw new Error('Token is Missing');

      const payload = await this.jwtService.verifyAsyncToken(token, {
        secret: config.jwt.secret,
      });

      request['user'] = payload;
    } catch (error) {
      await this.appError.tokenValidation(error.message);
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    return type === 'Bearer' ? token : undefined;
  }
}
