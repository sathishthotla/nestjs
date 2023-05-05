import { Module } from '@nestjs/common';
  import { TeacherService } from './teacher.service';
  import { TeacherController } from './teacher.controller';
  import { Teacher,TeacherSchema} from './schema/teacher.schema';
  import { MongooseModule} from '@nestjs/mongoose';
  
  @Module({
    imports: [
     MongooseModule.forFeature([
        {
          name: Teacher.name,
          schema: TeacherSchema
        }
       
     ])
    ],
    controllers: [TeacherController],
    providers: [TeacherService]
  })
  export class TeacherModule {}
  