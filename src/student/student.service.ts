import { Injectable } from "@nestjs/common";
import { Student, StudentDocument } from "./schema/student.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UpdateStudentDto} from './dto/update-student.dto';
import { CreateStudentDto } from "./dto/create-student.dto";
import { promises } from "dns";
import { Observable, from, switchMap } from "rxjs";
import { Repository } from "typeorm";

@Injectable()
export class StudentService {
  fileModel: any;
  updateOne: any;

  constructor(@InjectModel(Student.name) private readonly studentModel: Model < StudentDocument > ) {}

  async create(createStudentDto: CreateStudentDto): Promise < StudentDocument > {
    const student = new this.studentModel(createStudentDto);
    return student.save();
  }

  async createMany(createStudentDto: CreateStudentDto[]): Promise<Student[]> {
    const students = await this.studentModel.insertMany(createStudentDto);
    return students;
  }

//  async createone(id:number, student: Student): Promise<Observable<any>> {
//     delete student.Email;
//     delete student.Address;
//     delete student.Salary;
//     delete student.Gender;

//     return from(this.studetRepository.udateOne(id.student)). pipe(
//     switchMap(() =>  this.findOne(id))
//     );
//   }
  //studetRepository(studetRepository: any): Observable<any> {
    //throw new Error("Method not implemented.");
  //}

  async createfile(createStudentDto: CreateStudentDto): Promise < StudentDocument > {
    const student = new this.studentModel(createStudentDto);
    return student.save();
  }
 
 
  
  

  async totalAll(): Promise < StudentDocument[] > {
    return this.studentModel.find()
      .exec();
  }

  async findOne(id: string) {
    return this.studentModel.findById(id);
  }

  async update(id: string, updateStudentDto: UpdateStudentDto): Promise < StudentDocument > {
    return this.studentModel.findByIdAndUpdate(id, updateStudentDto);
  }

  async remove(id: string) {
    return this.studentModel.findByIdAndRemove(id);
  }
}