import { Teacher } from "../schema/teacher.schema";

  export class CreateTeacherDto extends Teacher {
   
    title: string;
    meetingDate: any;
    meetingEndTime: any;
    invitees: string;
    initiator: string;
    meetingtype: string;
    meetingstarttime: any;
    location: any;
    fileupload: any;

}