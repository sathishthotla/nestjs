import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';
import { Post } from 'src/post/entities/post.entity';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
    //id: number;
 //   name: string;
//}
//export class UpdateCustomerDto {
    id: number;
    name: string;
    posts: Post;
  // postNames: string[]
  //posts: UpdatePostDTO;
   
}
