import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { LoggerService } from 'src/utils/logger.service';

@Injectable()
export class GlobalMiddleware implements NestMiddleware {

  constructor(private logger: LoggerService) {}

  use(req: Request, res: Response, next: Function) {
    this.logger.set('middleware', 1);
    next();
  }
}
