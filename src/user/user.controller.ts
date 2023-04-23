import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/addUser')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
   console. log(Body) 
   
    }

  @Get('user')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id)
    return this.userService.findOne(+id);
  }

  @Patch('/updateuser/:id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    console.log("checking1-------->"+id);
    return this.userService.update(+id, updateUserDto);

  }
  //@Patch('/updateemployee/:id')
 // update(@Param('id') id: string, @Body() updateemployeeDto: UpdateEmployeeDto) {
   // return this.employeeService.update(+id, updateemployeeDto);
  //}
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
