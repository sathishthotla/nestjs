import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user-schema';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/Role/roles.guard';

@Module({
  imports: [
    MongooseModule.forFeature([
       {
         name: User.name,
         schema: UserSchema
       }
      
    ])
   ],
  controllers: [UserController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },UserService
  ],
  exports: [UserService],
})


export class UserModule {}
