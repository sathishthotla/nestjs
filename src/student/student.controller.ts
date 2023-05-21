import {Controller,Get,Post,Body,Param,Delete,Put, Patch, UseInterceptors, UploadedFile, UploadedFiles} from '@nestjs/common';
import { StudentService} from './student.service';
  import {CreateStudentDto} from './dto/create-student.dto';
  import {UpdateStudentDto} from './dto/update-student.dto';
  import { Student } from './schema/student.schema';
//import { profile } from 'console';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { Observable,  tap } from 'rxjs';
import { diskStorage } from 'multer';
import { map } from 'rxjs/operators';
import path = require ('path');


  //export const Storage = {
    //Storage: diskStorage({
     // destination: '/uploads/profileimages',
      //filename: (req,file, cb) => {
       // const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
        //const extesion: string = path.parse(file.originalname).ext;

        //cb(null, '${filename}${extesion}' )
      //}
    //})
  //}

  @Controller('students')
  export class StudentController {
    fileService: any;
    constructor(private readonly studentService: StudentService) {}
  
    @Post('/addStudent')
    create(@Body() createStudentDto: CreateStudentDto) {
        console.log("sathishyadav...................................",createStudentDto);
      return this.studentService.create(createStudentDto);
    }

    @Post('/manystudent')
    async createMany(@Body() createStudentDto: CreateStudentDto[]) {
      //console.log( "sathis.......................",createStudentDto)
      return this.studentService.createMany(createStudentDto);
    }
   
   
    
    @Post('/addupload3')
    @UseInterceptors(FileInterceptor('file')) 
    //{
      //dest:'./uploads/profileImage',
    //}
    uploadFile(@UploadedFile() file: Express.Multer.File) {
      console.log(file);
      //Convert the file to base64 string
      const fileB64 = file.buffer.toString('base64');
      //const FirstName = 'rajender';
      return this.studentService.createfile({
        //fileupload: fileB64,
        id: function (id: any, arg1: { profileImage: any; }): void {
          throw new Error('Function not implemented.');
        },
        FirstName: 'rajender',
        SurName: 'nune',
        Designation: 'IT',
        Email: 'rajender@gmail.com',
        Address: 'India',
        Salary: '4000',
        Gender: 'male'
      });
    }
   


    //@Post()
    //@UseInterceptors(FileFieldsInterceptor([
     // { name: 'file', maxCount: 2 },
      //{ name: 'file2', maxCount: 1 },

    //]))
   //File(@UploadedFiles() files: { file?: Express.Multer.File[], background?: Express.Multer.File[] }) {
     // console.log(files);
      //return files;
    //}

    
    

     // return this.studentService.updateOne(student.id, {profileImage: File.filename}).pipe(
       // tap((student: Student) => console.log(student))
        //map((student:Student) => ({profileImage: student.profileImage})
      
      //)
    
   // }

   

    

   // @Post('file')
    //@UseInterceptors(FileInterceptor('file'))
    //postAdd(@UploadedFile() file:Express.Multer.File):object {
      //console.log("file.......")
      //return {
        //massage:"file upload"
      //}
    //}

   @Get()
    resultAll() {
      return this.studentService.totalAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.studentService.findOne(id);
       //var Addressone = this.studentService.findOne(id);
       //return Addressone;
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
      console.log("sathish............................",updateStudentDto)
      return this.studentService.update(id, updateStudentDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.studentService.remove(id);
    }
  }

function uuidv4() {
  throw new Error('Function not implemented.');
}
