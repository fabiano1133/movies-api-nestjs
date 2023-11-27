import { Module } from '@nestjs/common';
import { AccountService } from './usecases/account.service';
import { AccountController } from './infra/controllers/account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './infra/entities/account.entity';
import { UsersRepository } from './infra/repositories/implementations/UsersRepository';
import { PasswordHashService } from 'src/ultils/providers/password-hash/password-hash.service';
import { TokenGenerateModule } from 'src/ultils/providers/token-generate/token-generate.module';
import { AppError } from 'src/ultils/error/AppError';

@Module({
  imports: [TypeOrmModule.forFeature([User]), TokenGenerateModule],
  providers: [
    AccountService,
    PasswordHashService,
    AppError,
    {
      provide: 'IUsersRepository',
      useClass: UsersRepository,
    },
  ],
  controllers: [AccountController],
  exports: [AccountService],
})
export class AccountModule {}
