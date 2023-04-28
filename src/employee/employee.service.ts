import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/upadte-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entities';

@Injectable()
export class EmployeeService {
  findoneby: any;
  findemployeeid(id: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}
  create(createEmployeeDto: CreateEmployeeDto[]) {
   // return 'This action adds a new laptop';
    return this.employeeRepository.save(createEmployeeDto);
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

   findempbyid(id: number) {
     return this.employeeRepository.findOneBy({employeeid:id});
     
   
  }

  
  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
   // return `This action updates a #${id} employee`;
   return this.employeeRepository.update(id,updateEmployeeDto);
  }

  remove(id: number) {
   // return `This action removes a #${name} employee`;
   return this.employeeRepository.delete(id);
  
  }
}
