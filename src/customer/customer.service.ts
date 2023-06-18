import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository, UpdateResult } from 'typeorm';
import { Post } from 'src/post/entities/post.entity';
import { async } from 'rxjs';
import { UpdatePostDto } from 'src/post/dto/update-post.dto';


@Injectable()
export class CustomerService {
  constructor(
  @InjectRepository(Customer)
  private customerrepository: Repository<Customer>,
  @InjectRepository(Post)
  private postRepository: Repository<Post>)
  {}
  
  

   async create(createCustomerDto: CreateCustomerDto) {
   // return 'This action adds a new customer';
   return await this.customerrepository.save(createCustomerDto);
   }
//find all
    async findAllCustomersWithPosts(): Promise<Customer[]> {
    return this.customerrepository.find({ relations: ['posts'] });
    }


   async getCustomerById(id: number): Promise<Customer> {
    return await this.customerrepository.findOne({ where: { id },
      relations: ['posts'],
    });
    }

  
  //update

    async updateCustomerWithPosts(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    const customer = await this.customerrepository.findOne({ where: { id }, relations: ['posts'] });
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
//  Update customer entity
    customer.name = updateCustomerDto.name;
    await this.customerrepository.save(customer);
    // Update post entities
      if (Array.isArray(updateCustomerDto.posts)) {
      for (const updatePostDto of updateCustomerDto.posts) {
      const post = customer.posts.find(p => p.id === updatePostDto.id);
      if (!post) {
      throw new NotFoundException(`Post with ID ${updatePostDto.id} not found`);
      }
      post.title = updatePostDto.title;
      await this.postRepository.save(post);
      }
    }
    return customer;
    }
  





  //delete
  
    async remove(id: number): Promise<Customer> {
    const customer = await this.customerrepository.findOne({ where: { id }, relations: ['posts'] });
    if (!customer) {
    throw new NotFoundException('Customer not found');
     }
     if (customer.posts && customer.posts.length > 0) {
      await this.postRepository.delete(customer.posts.map(post => post.id));
    }
     return this.customerrepository.remove(customer);
   }
 
  
}
