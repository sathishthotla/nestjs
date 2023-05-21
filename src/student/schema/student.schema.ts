import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
  import { Document} from 'mongoose';
  
  export type StudentDocument = Student & Document;
  
  @Schema()
  export class Student {
    id(id: any, arg1: { profileImage: any; }) {
      throw new Error('Method not implemented.');
    }
   //@Prop()
    //FirstName: string;
  
    //Prop()
    //urName: string;

    //@Prop()
    //Designation: string;
  
    //@Prop()
    //Email: string;
  
    //@Prop()
    //Address: string;
  
 //   @Prop()
   // Salary: string;
  
    //@Prop()
    //Gender: string;

    //@Prop()
    //fileupload: string;
  
    FirstName: string;
    SurName: string;
    Designation: string;
    Email: string;
    Address: string;
    Salary: string;
    Gender: string;
  
   
  }
  
  export const StudentSchema = SchemaFactory.createForClass(Student);
  