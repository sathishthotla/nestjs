import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/upadte-employee.dto';
import { Employee } from './entities/employee.entities';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('/addEmployee')
  async create(@Body() createemployeeDto: CreateEmployeeDto[]):Promise<Employee[]> {
    return await this.employeeService.create(createemployeeDto);
 

  }

  @Get()
  findAll():Promise<Employee[]> {
    const emp= this.employeeService.findAll();
    console.log(emp);
    return emp;
  }

   @Get(':id')
   findOne(@Param('id') id: string) {
     //return this.employeeService.findone(+id);
     return 'sateesh'
   }

    @Patch('/updateemployee/:id')
  update(@Param('id') id: string, @Body() updateemployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(+id, updateemployeeDto);
  }

  @Delete('/deleteemployee/:id')
  remove(@Param('id') id: string) {
  
    return this.employeeService.remove(+id);

  }
  
}
