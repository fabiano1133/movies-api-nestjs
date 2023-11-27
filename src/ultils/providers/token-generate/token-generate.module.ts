import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TokenGenerate } from './token-generate.service';
import configuration from 'src/config/configuration';

const config = configuration();

@Module({
  imports: [
    JwtModule.register({
      secret: config.jwt.secret,
      signOptions: { expiresIn: config.jwt.expiresIn, algorithm: 'HS256' },
    }),
  ],

  providers: [TokenGenerate],
  controllers: [],
  exports: [TokenGenerate],
})
export class TokenGenerateModule {}
