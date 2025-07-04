import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class TasksFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost): void {
    host.switchToHttp().getResponse().status(500).json({
      statusCode: 500,
      message: 'Internal server error',
    });
  }
}
