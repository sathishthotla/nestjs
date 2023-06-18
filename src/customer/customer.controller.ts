import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';


@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.customerService.findAllCustomersWithPosts();
  }

@Get(':id')
findOne(@Param('id') id: string) {
 return this.customerService.getCustomerById(+id);
}
  

  

 @Patch(':id')
 async update(@Param('id') id: number, @Body() updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
 const updatedCustomer = await this.customerService.updateCustomerWithPosts(id, updateCustomerDto);
 return updatedCustomer;
 }
 
 



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
