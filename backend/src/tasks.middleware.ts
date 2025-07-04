import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TasksMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void): void {
    console.log('Request received:', req.method, req.url);
    next();
  }
}
