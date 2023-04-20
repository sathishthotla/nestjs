import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  employeeid: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  role: string;

  
}

