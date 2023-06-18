import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  
  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    const book = await this.bookService.create(createBookDto);
    return book;
  }
  // @Post(':id')
  // create( @Body() createBookDto: CreateBookDto) {
  // return this.bookService.create(+id,createBookDto);
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
   return this.bookService.getBookById(+id);
 }


  @Get()
  findAll() {
    return this.bookService.findAll();
  }

 

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
