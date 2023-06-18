import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { Customer } from 'src/customer/entities/customer.entity';

export class UpdatePostDto extends PartialType(CreatePostDto) {
    id: number;
    title: string;
    customerId: Customer;
}
