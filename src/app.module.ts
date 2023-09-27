import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppMongooseModule } from '@quizs/configurations/mongoose';
import { UserRepositoryModule } from '@quizs/repositories/users';

@Module({
  imports: [AppMongooseModule, UserRepositoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
