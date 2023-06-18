import { Role } from "src/Role/role.enum";

export class CreateUserDto {

    userId : string;   
    name: string; 
    email: string;
    password: string;
    roles: Role;
}

