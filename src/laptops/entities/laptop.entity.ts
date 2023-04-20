import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Laptop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  model: string;

  @Column()
  colour: string;

  @Column()
  storage: string;

  
 
}

