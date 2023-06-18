//import { Role } from "./role.enum";
import { Role } from "./role.eums";


export interface User {
    userId: number;
    username: string;
    password: string;
    roles: Role[];
}