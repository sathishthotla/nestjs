import { Injectable } from "@nestjs/common";
import { Teacher, TeacherDocument } from "./schema/teacher.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UpdateTeacherDto } from "./dto/update.teacher.dto";
import { CreateTeacherDto } from "./dto/create.teacher.dto";
import { promises } from "dns";
import { Observable, from, switchMap } from "rxjs";
import { Repository } from "typeorm";

@Injectable()
export class TeacherService {
  createMany(arg0: { fileupload: any; id: (id: any, arg1: { profileImage: any; }) => void; FirstName: any; Email: any; }) {
    throw new Error('Method not implemented.');
  }
  teacherModel: any;
  updateTeacherDto(id: string, FirstName: string, Email: string, file: Express.Multer.File) {
    throw new Error('Method not implemented.');
  }
  updateTeacherInfo(id: string, name: string, email: string, file: Express.Multer.File) {
    throw new Error('Method not implemented.');
  }
    fileModel: any;
    updateOne: any;
  
    constructor(@InjectModel(Teacher.name) private readonly TeacherModel: Model < TeacherDocument > ) {}
  

  //constructor(@InjectModel(Teacher.name) private readonly Model: Model < TeacherDocument > ) {}

  async create(createTeacherDto: CreateTeacherDto): Promise < TeacherDocument > {
    const teacher = new this.TeacherModel(createTeacherDto);
    return teacher.save();
  }


  async createfile(createTeacherDto: CreateTeacherDto): Promise < TeacherDocument > {
    const teacher = new this.TeacherModel(createTeacherDto);
    return teacher.save();
  }
 
   async findAll(): Promise < TeacherDocument[] > {
    return this. TeacherModel.find()
      .exec();
   }

  async findOne(id: string) {
    return this.TeacherModel.findById(id);
  }

  async update(id: string, updateTeacherDto: UpdateTeacherDto): Promise < TeacherDocument > {
     return this.TeacherModel.findByIdAndUpdate(id, updateTeacherDto);
 }
 
 async remove(id: string) {
    return this.TeacherModel.findByIdAndRemove(id);
  }
}