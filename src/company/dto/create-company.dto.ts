import { Role } from "src/Role/role.enum";

export class CreateCompanyDto {
    name: string;
    address: string;
    info: string;
    roles: Role[];

   // products: string[];
}
