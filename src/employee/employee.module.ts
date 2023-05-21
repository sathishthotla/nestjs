import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { Employee } from './entities/employee.entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule} from '@nestjs/mongoose';


@Module({
 //imports: [ MongooseModule.forFeature([Employee])],

  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
