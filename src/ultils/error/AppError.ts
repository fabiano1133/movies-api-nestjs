import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AppError {
  async movieNotFound(message: string) {
    throw new BadRequestException(message);
  }

  async emailOrPasswordIncorrect(message: string) {
    throw new UnauthorizedException(message);
  }

  async tokenValidation(message: string) {
    throw new UnauthorizedException(message);
  }
}
