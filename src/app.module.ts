import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaptopsModule } from './laptops/laptops.module';
import { Laptop } from './laptops/entities/laptop.entity';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/entities/employee.entities';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
MongooseModule.forRoot('mongodb://127.0.0.1:27017/balutest'),
StudentModule
],})
export class AppModule {}
