import { Post } from "src/post/entities/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;

     @OneToMany(() => Post, post => post.customer, { cascade: true,})
       // onUpdate: 'CASCADE',
        //onDelete: 'CASCADE',
    
      posts: Post[];
 

}