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

@Module({
  imports: [UserModule,EmployeeModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [User,Laptop,Employee],
    synchronize: false,
  }), LaptopsModule, UserModule,],
  controllers: [AppController],
  providers: [AppService, ],
 
})
export class AppModule {}
