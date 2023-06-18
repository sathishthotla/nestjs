import { SetMetadata } from '@nestjs/common';
//import { Role } from '../model/role.enum';
import { Role } from 'src/Role/role.enum';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
