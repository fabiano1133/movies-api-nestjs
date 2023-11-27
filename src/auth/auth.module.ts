import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TokenGenerateModule } from 'src/ultils/providers/token-generate/token-generate.module';
import { AccountModule } from 'src/account/account.module';
import { PasswordHashService } from 'src/ultils/providers/password-hash/password-hash.service';
import { AppError } from 'src/ultils/error/AppError';
import { TokenGenerate } from 'src/ultils/providers/token-generate/token-generate.service';
import { JwtService } from '@nestjs/jwt';
import { GetUserId } from 'src/common/Middlewares/get-user-id.middleware';

@Module({
  imports: [AccountModule, TokenGenerateModule],
  providers: [
    AuthService,
    PasswordHashService,
    AppError,
    TokenGenerate,
    JwtService,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GetUserId).forRoutes('v1/api/account/user');
  }
}
