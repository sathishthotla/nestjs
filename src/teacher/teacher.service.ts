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
 
  fileModel: any;
    updateOne: any;
  teacherModel: any;
  
    constructor(@InjectModel(Teacher.name) private readonly TeacherModel: Model < TeacherDocument > ) {}
  

  //constructor(@InjectModel(Teacher.name) private readonly Model: Model < TeacherDocument > ) {}

  async create(createTeacherDto: CreateTeacherDto): Promise < TeacherDocument > {
    const teacher = new this.TeacherModel(createTeacherDto);
    return teacher.save();
  }


  async createfile(createTeacherDto: CreateTeacherDto): Promise < TeacherDocument > {
    console.log("---teacher service response----->",createTeacherDto);
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

  async update(updateTeacherDto: UpdateTeacherDto): Promise < TeacherDocument > {
    const teacher = new this.TeacherModel(updateTeacherDto);
    const id = updateTeacherDto.id;
     return this.TeacherModel.findByIdAndUpdate(id, updateTeacherDto);
 }

  async remove(id: string) {
    return this.TeacherModel.findByIdAndRemove(id);
  }
}