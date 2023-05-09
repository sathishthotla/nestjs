import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import { create } from 'domain';
  import { Document} from 'mongoose';
  
  export type TeacherDocument = Teacher & Document;
  
  @Schema()
  export class Teacher {
    //static Tittle: string;
    static save(): TeacherDocument | PromiseLike<TeacherDocument> {
        throw new Error("Method not implemented.");
    }
    id(id: any, arg1: { profileImage: any; }) {
      throw new Error('Method not implemented.');
    }
    @Prop()
    title: string;

    @Prop()
    meetingDate: string;

    @Prop()
    meetingEndTime: string;

    @Prop()
    invitees: string;

    @Prop()
    initiator: string;
     
    @Prop()
    meetingtype: string;

    @Prop()
    meetingstarttime: string;

    @Prop()
    location: string;

    @Prop()
    fileupload: string;

}
  
export const TeacherSchema = SchemaFactory.createForClass(Teacher);
