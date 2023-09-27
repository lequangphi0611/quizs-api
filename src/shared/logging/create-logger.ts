import { LoggerService } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { format, transports } from 'winston';

const { combine, timestamp, colorize, printf } = format;

export const createLogger = (): LoggerService => {
  return WinstonModule.createLogger({
    level: 'debug',
    format: combine(
      timestamp({
        format: 'YYYY-MM-DD HH:mm:ss.m',
      }),
      colorize(),
      printf(({ level, message, timestamp, context }) => {
        return `[${context}] ${timestamp} ${level}: ${message}`;
      }),
    ),
    transports: [new transports.Console()],
  });
};
