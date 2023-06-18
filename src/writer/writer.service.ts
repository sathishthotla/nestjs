import { Injectable } from '@nestjs/common';
import { CreateWriterDto } from './dto/create-writer.dto';
import { UpdateWriterDto } from './dto/update-writer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Writer } from './entities/writer.entity';
import { Repository } from 'typeorm';
import { Book } from 'src/book/entities/book.entity';
import { promises } from 'dns';
import { title } from 'process';

@Injectable()
export class WriterService {
  constructor(
  @InjectRepository(Writer)
  private writerRepository: Repository<Writer>,
  @InjectRepository(Book)
  private bookRepository: Repository<Book>)
  
  {}
  async create(createWriterDto: CreateWriterDto) {
    //const book =  await this.bookRepository.findOneById(id)
    //const customer = await this.customerRepository.findOne({ where: { id }});
    // return 'This action adds a new customer';
    return await this.writerRepository.save(createWriterDto);
    }

  
     
     

    async findAllWriterWithBooks(): Promise<Writer[]> {
      return this.writerRepository.find({ relations: ['books'] });
      }
  
      async getWriterById(id: number): Promise<Writer> {
        return await this.writerRepository.findOne({ where: { id },
          relations: ['books'],
        });
        }
      

  

  findOne(id: number) {
    return `This action returns a #${id} writer`;
  }

  update(id: number, updateWriterDto: UpdateWriterDto) {
    return `This action updates a #${id} writer`;
  }

  remove(id: number) {
    return `This action removes a #${id} writer`;
  }
}
