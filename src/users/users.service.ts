import { Injectable } from '@nestjs/common';
import { User } from '../model/user.entity';

//import { Role } from '../model/role.enum';
import { Role } from 'src/Role/role.enum';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
//import { UserDocument } from './schema/user.schema';
import { UserDocument } from './schema/users.schema';
//import * as bcrypt from 'bcrypt'
//import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class UsersService {
 

  // constructor(@InjectModel('user') private userModel: Model<UserDocument>) {}


  // async create(user: User): Promise<any> {
  //   // hashing
  //   const salt = await bcrypt.genSalt();
  //   console.log('salt----->'+salt);
  //   const hashPassword = await bcrypt.hash(user.password, salt);
  //   user.password = hashPassword;

  //   const newUser = new this.userModel(user);
  //   return newUser.save();
  // }



  private readonly users = [
    {
      userId: 1,
      username: 'sathish',
      password: 'yadav12',
      roles: [Role.User],
    },
    {
      userId: 2,
      username: 'balu',
      password: 'balu123',
      roles: [Role.Admin],
    },
  ];

  async findOne(username: string): Promise<any | undefined> {
    return this.users.find((user) => user.username === username);
  }

}
