import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingRequestInterceptor implements NestInterceptor {
  constructor(private logger: Logger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const loggerContext = 'Http';
    const request = context.switchToHttp().getRequest<Request>();
    this.logger.log(`Start ${request.method} - ${request.url}`, loggerContext);
    this.logger.verbose(
      `headers: ${JSON.stringify(request.headers, null, 4)}`,
      loggerContext,
    );
    return next
      .handle()
      .pipe(
        tap(() =>
          this.logger.log(
            `End ${request.method} - ${request.url}`,
            loggerContext,
          ),
        ),
      );
  }
}
