import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';

import { UserSchema } from './schema/users.schema';
//import { UsersController } from './users.controller';

@Module({
 // imports:[MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
  //]
 // controllers: [UsersController],
  providers: [UsersService],
 exports: [UsersService],
})
export class UsersModule {}
