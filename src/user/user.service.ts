import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user-schema';

//
// This should be a real class/interface representing a user entity
//export type User = any;

@Injectable()
export class UserService {
  
  constructor(@InjectModel(User.name) private readonly userModel: Model < UserDocument > ) {}
  

  // private readonly users = [
  //   {
  //     userId: 1,
  //     username: 'john',
  //     password: 'changeme',
  //   },
  //   {
  //     userId: 2,
  //     username: 'maria',
  //     password: 'guess',
  //   },
  // ];
  async create(createUserDto: CreateUserDto): Promise<User | undefined> {
   return await this.userModel.create(createUserDto);
  }
  async findOne(name: string): Promise<any> {
    return this.userModel.findOne({name});
  }
  async findAll(name: string): Promise<any> {
    console.log('---req---',name);
    return this.userModel.findOne({name});
}
}
