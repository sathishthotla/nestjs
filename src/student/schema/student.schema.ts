import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
  import { Document} from 'mongoose';
  
  export type StudentDocument = Student & Document;
  
  @Schema()
  export class Student {
    @Prop()
    FirstName: string;
  
    @Prop()
    SurName: string;
  
    @Prop()
    Designation: string;
  
    @Prop()
    Email: string;
  
    @Prop()
    Address: string;
  
    @Prop()
    Salary: string;
  
    @Prop()
    Gender: string;
  }
  
  export const StudentSchema = SchemaFactory.createForClass(Student);
  