import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userid: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;




  
}

