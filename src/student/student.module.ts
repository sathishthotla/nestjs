import {
    Module
  } from '@nestjs/common';
  import {
    StudentService
  } from './student.service';
  import {
    StudentController
  } from './student.controller';
  import {
    Student,
    StudentSchema
  } from './schema/student.schema';
  import {
    MongooseModule
  } from '@nestjs/mongoose';
  
  @Module({
    imports: [
     MongooseModule.forFeature([
        {
          name: Student.name,
          schema: StudentSchema
        },
     ])
    ],
    controllers: [StudentController],
    providers: [StudentService]
  })
  export class StudentModule {}
  