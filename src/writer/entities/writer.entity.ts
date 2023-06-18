import { Book } from "src/book/entities/book.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Writer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;

     
  
    @ManyToMany(() => Book, book => book.writers,  { onUpdate: 'CASCADE' })
   // @JoinTable()
       // onUpdate: 'CASCADE',
       //// onDelete: 'CASCADE',
   
        
        books: Book[]; 

}




