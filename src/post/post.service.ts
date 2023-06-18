import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { Customer } from 'src/customer/entities/customer.entity';

 @Injectable()
 export class PostService {
 constructor(
  @InjectRepository(Post)
  private postRepository: Repository<Post>,
  @InjectRepository(Customer)
  private customerRepository: Repository<Customer>) {}  
   
  
  async create(id:number, createPostDto: CreatePostDto): Promise<Post> {
  const customer = await this.customerRepository.findOne({ where: { id }});
      //console.log("hell0000000",customer);      
  createPostDto.customer=customer;
  return await this.postRepository.save(createPostDto)
  }

 
  async findAllPosts(): Promise<Post[]> {
  return this.postRepository.find({ relations: ['customer'] });
  }

    async getPostById(id: number): Promise<Post> {
    return await this.postRepository.findOne({ where: { id },
      relations: ['customer'],
    });
   }

   
    async updatePostWithCustomer(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    const { customerId, ...rest } = updatePostDto;
    const post = await this.postRepository.findOne({ where: { id }, relations: ['customer'] });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    if (customerId) {
    const customer = await this.customerRepository.findOne({ where:{id}});
    if (!customer) {
    throw new NotFoundException('Customer not found');
    }
   post.customer = customer;
    }
   Object.assign(post, rest);
   return this.postRepository.save(post);
  }


    async remove(id: number): Promise<Post> {
    const post = await this.postRepository.findOne({ where: { id }, relations: ['customer'] });
      if (!post) {
      throw new NotFoundException('Post not found');
      }
      return this.postRepository.remove(post);
    }


  
}
