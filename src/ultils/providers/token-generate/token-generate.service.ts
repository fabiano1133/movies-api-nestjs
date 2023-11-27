import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenGenerate {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(payload: any, secret: string, expiresIn: string): string {
    const token = this.jwtService.sign(payload, {
      secret,
      expiresIn,
    });

    return token;
  }

  async verifyAsyncToken(token: string, secret: any): Promise<any> {
    const verifiedToken = await this.jwtService.verifyAsync(token, secret);

    return verifiedToken;
  }
  decoded(token: string) {
    const decoded = this.jwtService.decode(token);

    return decoded;
  }
}
