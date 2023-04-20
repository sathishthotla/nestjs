import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LaptopsService } from './laptops.service';
import { CreateLaptopDto } from './dto/create-laptop.dto';
import { UpdateLaptopDto } from './dto/update-laptop.dto';

@Controller('laptops')
export class LaptopsController {
  constructor(private readonly laptopsService: LaptopsService) {}

  @Post()
  create(@Body() createLaptopDto: CreateLaptopDto) {
  return this.laptopsService.create(createLaptopDto);
 // return '';

  }

  @Get()
  findAll() {
    return this.laptopsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.laptopsService.findOne(+id);
  }

  @Get(':id')
  findtwo(@Param('id') id: string) {
    return this.laptopsService.findtwo(+id);

  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLaptopDto: UpdateLaptopDto) {
    return this.laptopsService.update(+id, updateLaptopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.laptopsService.remove(+id);
  }
  
}
