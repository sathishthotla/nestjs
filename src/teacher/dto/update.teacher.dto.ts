import { PartialType } from "@nestjs/mapped-types";
import { CreateTeacherDto } from "./create.teacher.dto";

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {
    title: string;
    meetingDate: string;
    meetingEndTime: string;
    invitees: string;
    initiator: string;
    meetingtype: string;
    meetingstarttime: string;
    location: string;
    fileupload: any;
    id: any
 
}

