import { Injectable, NestMiddleware } from '@nestjs/common';
import { TokenGenerate } from 'src/ultils/providers/token-generate/token-generate.service';

@Injectable()
export class GetUserId implements NestMiddleware {
  constructor(private tokenGenerateService: TokenGenerate) {}

  async use(req: any, res: any, next: (error?: any) => void) {
    try {
      const authorizationHeader = req.headers.authorization;

      if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
        const token = authorizationHeader.substring(7);
        const decodedToken = this.tokenGenerateService.decoded(token) as {
          id: string;
        };

        if (decodedToken && decodedToken.id) {
          req.user_id = decodedToken.id;
        }
      }
      next();
    } catch (error) {}
  }
}
