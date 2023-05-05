import { Teacher } from "../schema/teacher.schema";


  
  export class CreateTeacherDto extends Teacher {
    static file: any;
    static FirstName: string;
   static Email: string;
}