import { write } from "fs";
import { writer } from "repl";
import { Writer } from "src/writer/entities/writer.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

//export class Book {}
@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string; 
  
       
@ManyToMany(() => Writer, writer => writer.books, { cascade: true,})
@JoinTable()
// @JoinTable({
//    name: 'book',
//    joinColumns: [{ name: 'writer', referencedColumnName: 'id' }],
//    inverseJoinColumns: [{ name: 'writer', referencedColumnName: 'id' }],
//  })
//writers: Writer;
writers: Writer[]; 
}