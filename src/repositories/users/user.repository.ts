import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '@quizs/schemas/users';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(Users.name) private userModel: Model<Users>) {}

  findByUsername(username: string): Promise<UsersDocument> {
    return this.userModel.find({ username }).findOne().exec();
  }
}
