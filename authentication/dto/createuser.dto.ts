import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/dashboard/enum/Role.enum";

export class NewUserDTO {
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    roles: Role[];
  }