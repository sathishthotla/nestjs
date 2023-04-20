import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from 'employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'employee/entities/employee.entities';
import { LaptopsModule } from './laptops/laptops.module';
import { Laptop } from './laptops/entities/laptop.entity';

@Module({
  imports: [EmployeeModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [Employee,Laptop,],
    synchronize: false,
  }), LaptopsModule,],
  controllers: [AppController],
  providers: [AppService, ],
 
})
export class AppModule {}
