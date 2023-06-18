import { Customer } from "src/customer/entities/customer.entity";

export class CreatePostDto {
    id: number;
    title: string;
    customer: Customer;
    //customerId: number;

}
