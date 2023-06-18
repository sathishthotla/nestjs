import { Customer } from "src/customer/entities/customer.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string; 
    @ManyToOne(() => Customer, customer => customer.posts,{
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    })
    customer: Customer;
}
