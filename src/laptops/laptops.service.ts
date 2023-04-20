import { Injectable } from '@nestjs/common';
import { CreateLaptopDto } from './dto/create-laptop.dto';
import { UpdateLaptopDto } from './dto/update-laptop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Laptop } from './entities/laptop.entity';

@Injectable()
export class LaptopsService {
  constructor(
    @InjectRepository(Laptop)
    private laptopsRepository: Repository<Laptop>,
  ) {}
  create(createLaptopDto: CreateLaptopDto) {
    return 'This action adds a new laptop';
  }

  findAll(): Promise<Laptop[]> {
    return this.laptopsRepository.find();
  }


  findOne(id: number) {
    return `This action returns a #${id} laptop`;
    //return this.laptopsRepository.find();
    
  }


  findtwo(id: number) {
    return `This action returns a #${id} laptop`;
  } 

  update(id: number, updateLaptopDto: UpdateLaptopDto) {
    return `This action updates a #${id} laptop`;
  }

  remove(id: number) {
    return `This action removes a #${id} laptop`;
  }
}
