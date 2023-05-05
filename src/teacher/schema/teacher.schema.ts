import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
  import { Document} from 'mongoose';
  
  export type TeacherDocument = Teacher & Document;
  
  @Schema()
  export class Teacher {
    static save(): TeacherDocument | PromiseLike<TeacherDocument> {
        throw new Error("Method not implemented.");
    }
    id(id: any, arg1: { profileImage: any; }) {
      throw new Error('Method not implemented.');
    }
    @Prop()
    FirstName: string;

    @Prop()
    Email: string;

    @Prop()
    fileupload: string


}
  
export const TeacherSchema = SchemaFactory.createForClass(Teacher);
