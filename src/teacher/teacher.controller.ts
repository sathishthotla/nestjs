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
   async create(@Body() createTeacherDto: CreateTeacherDto) {
        console.log("sathishyadav...................................",createTeacherDto);
      return await this.teacherService.create(createTeacherDto);
    }

    @Post('/addupload2')
    @UseInterceptors(FileInterceptor('file'))
     
    

    uploadFile(@UploadedFile() file: Express.Multer.File,
    
    @Body() createTeacherDto: CreateTeacherDto) {
      console.log(file);
      console.log('---------->>',createTeacherDto);
      console.log("-----====>>",createTeacherDto);
    
      //Convert the file to base64 string
    var fileB64 = file.buffer.toString('base64');
    //var ffileuploadB64= createTeacherDto.fileupload.buffer.toString('base64');
    var ftitle= createTeacherDto.title;
    var fmeattingdate= createTeacherDto.meetingDate;
    var fmettingendtime= createTeacherDto.meetingEndTime;
    var finitiator= createTeacherDto.initiator;
    var finvitees= createTeacherDto.invitees;
    var fmeetingtype= createTeacherDto.meetingtype;
    var fmeetingstarttime= createTeacherDto.meetingstarttime;
    console.log('checking the values',finitiator,ftitle,fmeetingtype,fmettingendtime,fmeetingstarttime)
    var flocation= createTeacherDto.location;
     
      return this.teacherService.createfile({
      //return this.teacherService.createfile({

       
        id: function (_id: any): void {
          throw new Error('Function not implemented.');
        },
        fileupload: fileB64,
        meetingEndTime: fmettingendtime,
        initiator: finitiator, 
        
        invitees: finvitees,
        meetingtype: fmeetingtype,
        meetingstarttime: fmeetingstarttime,
        location: flocation,
        title: ftitle,
        meetingDate:fmeattingdate,
       //fileupload:ffileuploadB64.buffer.toString('base64')
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
    @UseInterceptors(FileInterceptor('file')) 
    //uploadFile(@UploadedFile() file: Express.Multer.File,

    Update(@UploadedFile() file: Express.Multer.File, @Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
      var fileB64 = file.buffer.toString('base64');
      var ftitle= updateTeacherDto.title;
      var fmeattingdate= updateTeacherDto.meetingDate;
      var fmettingendtime= updateTeacherDto.meetingEndTime;
     var finitiator= updateTeacherDto.initiator;
     var finvitees= updateTeacherDto.invitees;
     var fmeetingtype= updateTeacherDto.meetingtype;
     var fmeetingstarttime= updateTeacherDto.meetingstarttime;
     var fid = updateTeacherDto.id;
     console.log('checking the values',finitiator,ftitle,fmeetingtype,fmettingendtime,fmeetingstarttime)
      var flocation= updateTeacherDto.location;
       
       // console.log('url path ---------->',request);
  
      console.log("sathish............................",updateTeacherDto)
    return this.teacherService.update({
      fileupload: fileB64,
      id: id,
      meetingEndTime: fmettingendtime,
      initiator: finitiator,
      invitees: finvitees,
      meetingtype: fmeetingtype,
      meetingstarttime: fmeetingstarttime,
      location: flocation,
      title: ftitle,
      meetingDate:fmeattingdate
    });

    
  }


   
    
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.teacherService.remove(id);
    }
  
  }
function uuidv4() {
  throw new Error('Function not implemented.');
}
