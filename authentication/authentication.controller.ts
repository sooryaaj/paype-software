import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Roles } from "src/authentication/decorator/roles.decorator";
import { Role } from "src/dashboard/enum/Role.enum";
import { AuthenticationService } from "./authentication.service";
import { ForgetPasswordDto } from "./dto/create-forget-password.dto";
import { NewUserDTO } from "./dto/createuser.dto";
import { ExistingUserDTO } from "./dto/existinguser.dto";
import { UserDetails } from "./User/user.interface";



@Controller('auth')
@ApiTags('auth')
export class AuthenticationController{
    constructor(private readonly authService: AuthenticationService){}

    @Post('signup')
    @Roles(Role.ADMIN)
    async signup(@Body() createUserDto: NewUserDTO): Promise<UserDetails | string>{
        return this.authService.signup(createUserDto);
    }

    @Post('login')
    @Roles(Role.ADMIN)
    async login(@Body() existingUserDto: ExistingUserDTO): Promise<{token: string} | any>{
        return this.authService.login(existingUserDto);
    }



}