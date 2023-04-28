import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    // return `This action updates a #${id} employee`;
    
   // return this.userRepository.update(id,UpdateUserDto);
    return this.userRepository.update(id, { 
      name: UpdateUserDto.name,email: updateUserDto.email
        
      })
   }

   remove(id: number) {
    return this.userRepository.delete(id);
   
  }
}
