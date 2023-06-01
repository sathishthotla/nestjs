import { Injectable } from '@nestjs/common';
import { UsersModule } from './users.module';

@Injectable()
export class UsersService {
 // findOne(username: string) {
  //   throw new Error('Method not implemented.');
//   }
private readonly users = [
    {
      userId: 1,
      username: 'sathish',
      password: 'pass123',
    },
    {
      userId: 2,
      username: 'minntu',
      password: 'pass1234',
    },
  ];
  //async findOne(username: string): Promise<any> {
    //return this.users.find(user => user.username === username);
  //}
 async findOne(username: string): Promise<any | undefined> {
    return this.users.find(user => user.username === username);
  }
}
