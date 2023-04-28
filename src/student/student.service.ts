import { Injectable } from "@nestjs/common";
import { Student, StudentDocument } from "./schema/student.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UpdateStudentDto} from './dto/update-student.dto';
import { CreateStudentDto } from "./dto/create-student.dto";

@Injectable()
export class StudentService {

  constructor(@InjectModel(Student.name) private readonly studentModel: Model < StudentDocument > ) {}

  async create(createStudentDto: CreateStudentDto): Promise < StudentDocument > {
    const student = new this.studentModel(createStudentDto);
    return student.save();
  }
  
  async createMany(createStudentDto: CreateStudentDto): Promise < StudentDocument > {
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