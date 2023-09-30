import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingRequestInterceptor } from '@quizs/interceptors/logging';
import { LoggingModule } from '@quizs/shared/logging';

@Module({
  imports: [LoggingModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingRequestInterceptor,
    },
  ],
})
export class AppModule {}
