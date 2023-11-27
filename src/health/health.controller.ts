import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
} from '@nestjs/terminus';

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
          'http://localhost:8080/v1/api/health/get-check-health',
        ),
    ]);
  }

  @Get('get-check-health')
  getCheck() {
    return `Application is Ok`;
  }
}
