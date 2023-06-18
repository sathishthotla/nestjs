import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
//import { User } from './schema/user.schema';
//import { User } from './schema/users.schema';
import { UsersModule } from './users.module';
import { UserSchema } from './schema/users.schema';

@Controller('users')
export class UsersController {
 // constructor(private readonly userService: UserService) {}
 constructor(private readonly usersService: UsersService) {}


//   @Post('create')
//   async createUser(@Body() user: User): Promise<User> {
//    return await this.userService.create(users);
//  }
//  @Post()
//  async createUser(@Body() User: User):  Promise<User> {
//     return await this.userService.create(User)
//  }

//   @Post()
//   create(@Body() createUserDto: CreateUserDto) {
//     return this.userService.create(+Id createUserDto);
//   }

//   @Get()
//   findAll() {
//     return this.usersService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.usersService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//     return this.usersService.update(+id, updateUserDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.usersService.remove(+id);
//   }
}
