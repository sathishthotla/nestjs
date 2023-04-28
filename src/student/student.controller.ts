import {Controller,Get,Post,Body,Param,Delete,Put, Patch} from '@nestjs/common';
  import { StudentService} from './student.service';
  import {CreateStudentDto} from './dto/create-student.dto';
  import {UpdateStudentDto} from './dto/update-student.dto';
  
  @Controller('student')
  export class StudentController {
    constructor(private readonly studentService: StudentService) {}
  
    @Post(':id')
    create(@Body() createStudentDto: CreateStudentDto) {
        console.log("sathishyadav...................................",createStudentDto);
      return this.studentService.create(createStudentDto);
    }
  
    @Post()
    createMany(@Body() createStudentDto: CreateStudentDto) {
        console.log("sathishyadav...................................",createStudentDto);
      return this.studentService.create(createStudentDto);
    }
    
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