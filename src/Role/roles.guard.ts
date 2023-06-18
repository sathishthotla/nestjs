
import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators";
import { Reflector } from "@nestjs/core";
import { Role } from "./role.enum";
import { ROLES_KEY } from "./roles.decorator";
import { Observable } from "rxjs";
import { RoleSpecification } from "typeorm";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> |Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => user.roles?.includes(role));
  

}
}