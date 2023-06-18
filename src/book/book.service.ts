import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { Writer } from 'src/writer/entities/writer.entity';
import { writer } from 'repl';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    @InjectRepository(Writer)
    private writerRepository: Repository<Writer>) {}  
  
    async create(createBookDto: CreateBookDto): Promise<Book> {
           return await this.bookRepository.save(createBookDto)
      }
    
  
      async getBookById(id: number): Promise<Book> {
        return await this.bookRepository.findOne({ where: { id },
          relations: ['writers'],
        });
        }
    
    
        
  
  findAll() {
    return `This action returns all book`;
  }

  
  

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
