import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RedisService } from 'nestjs-redis';
import { LoggerService } from './utils/logger.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private redisService: RedisService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
