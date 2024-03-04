import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './User1/User.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/nestjs_tutorial'),
    UserModule,
  ],
})
export class AppModule { }

