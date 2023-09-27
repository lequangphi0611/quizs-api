import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UsersSchemaModule } from '@quizs/schemas/users';

@Module({
  imports: [UsersSchemaModule],
  providers: [UserRepository],
})
export class UserRepositoryModule {}
