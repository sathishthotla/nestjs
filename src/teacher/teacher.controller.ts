import {Controller,Get,Post,Body,Param,Delete,Put, Patch, UseInterceptors, UploadedFile, UploadedFiles, Request} from '@nestjs/common';
import { TeacherService} from './teacher.service';
  import { CreateTeacherDto } from './dto/create.teacher.dto';
  import { UpdateTeacherDto } from './dto/update.teacher.dto';
  import { Teacher } from './schema/teacher.schema';
//import { profile } from 'console';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { Observable,  identity,  tap } from 'rxjs';
import { diskStorage } from 'multer';
import { map } from 'rxjs/operators';
import path = require ('path');
import { request } from 'express';

 @Controller('teacher')
  export class TeacherController {
    fileService: any;
    constructor(private readonly teacherService: TeacherService) {}
  
    @Post('/addTeacher')
    create(@Body() createTeacherDto: CreateTeacherDto) {
        console.log("sathishyadav...................................",createTeacherDto);
      return this.teacherService.create(createTeacherDto);
    }

    @Post('/addupload2')
    @UseInterceptors(FileInterceptor('file')) 
    uploadFile(@UploadedFile() file: Express.Multer.File,
    
    @Body() createTeacherDto: CreateTeacherDto) {
      console.log(file);
      console.log('---------->>',createTeacherDto);
      console.log("-----====>>",createTeacherDto.Email);
    
      //Convert the file to base64 string
      const fileB64 = file.buffer.toString('base64');
      const femail = createTeacherDto.Email;
      const fname= createTeacherDto.FirstName;
      //const FirstName = 'sathis';
      return this.teacherService.createfile({
        fileupload: fileB64,
        id: function (id: any, arg1: { profileImage: any; }): void {
          throw new Error('Function not implemented.');
        },
        FirstName: fname,
        Email: femail
        
        });
    }

   
  @Get()
       findAll(){
        return this.teacherService.findAll();
       }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.teacherService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
   console.log("sathish............................",updateTeacherDto)
      return this.teacherService.update(id, updateTeacherDto);
    }
   
    
    
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.teacherService.remove(id);
    }
  }

function uuidv4() {
  throw new Error('Function not implemented.');
}
