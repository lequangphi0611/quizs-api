import { Logger, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingRequestInterceptor } from '@quizs/interceptors/logging';

@Module({
  imports: [],
  controllers: [],
  providers: [
    Logger,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingRequestInterceptor,
    },
  ],
})
export class AppModule {}
