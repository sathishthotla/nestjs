import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';


  @Controller('post')
  export class PostController {
  constructor(private readonly postService: PostService) {}

   @Post(':id')
   create(@Param('id') id: number, @Body() createPostDto: CreatePostDto) {
   return this.postService.create(+id,createPostDto);
   }

   @Get()
   findAll() {
    //return this.postService.findAll();
    return this.postService.findAllPosts();
    }

   @Get(':id')
   findOne(@Param('id') id: string) {
   return this.postService.getPostById(+id);
   }

   @Patch(':id')
   async update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto,): Promise<any> {
   const updatedPost = await this.postService.updatePostWithCustomer(id, updatePostDto);
   return updatedPost;
   }

   @Delete(':id')
   remove(@Param('id') id: string) {
   return this.postService.remove(+id);
   }
}
