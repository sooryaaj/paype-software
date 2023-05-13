import { SetMetadata } from "@nestjs/common";
import { Role } from "src/dashboard/enum/Role.enum";

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);