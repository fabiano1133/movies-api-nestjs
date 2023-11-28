import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
} from '@nestjs/terminus';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('v1/api/health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}
  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () =>
        this.http.pingCheck(
          'API',
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/v1/api/health/get-check-health'
            : 'https://movies-api-nestjs-docker.onrender.com/v1/api/health/get-check-health',
        ),
    ]);
  }

  @Get('get-check-health')
  getCheck() {
    return `Application is Ok`;
  }
}
