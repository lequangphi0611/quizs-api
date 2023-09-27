import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://quangphi:quangphi@cluster0.ynp8e.mongodb.net?retryWrites=true&w=majority',
      {
        dbName: 'quizs',
      },
    ),
  ],
})
export class AppMongooseModule {}
