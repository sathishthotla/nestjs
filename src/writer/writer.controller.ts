import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WriterService } from './writer.service';
import { CreateWriterDto } from './dto/create-writer.dto';
import { UpdateWriterDto } from './dto/update-writer.dto';
import { BookService } from 'src/book/book.service';

@Controller('writer')
export class WriterController {
  constructor(private readonly writerService: WriterService){}
 // constructor(private readonly bookService: BookService) {}

//  @Post()
//  create(@Param('id') id: number, @Body() createWriterDto: CreateWriterDto) {
//    return this.writerService.create(+id,createWriterDto);
//  }
 
 @Post()
 create(@Body() createWriterDto: CreateWriterDto) {
   return this.writerService.create(createWriterDto);
 }
  
  
 @Get()
 findAll() {
   return this.writerService.findAllWriterWithBooks();
 }
 @Get(':id')
 findOne(@Param('id') id: string) {
  return this.writerService.getWriterById(+id);
}
 
 

 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWriterDto: UpdateWriterDto) {
    return this.writerService.update(+id, updateWriterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.writerService.remove(+id);
  }
}
