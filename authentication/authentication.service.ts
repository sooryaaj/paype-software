import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { NewUserDTO } from "./dto/createuser.dto";
import { ExistingUserDTO } from "./dto/existinguser.dto";
import * as bcrypt from  'bcrypt';
import * as crypto from 'crypto';
import { MailerService } from '@nestjs-modules/mailer';
import { UserDetails } from "./User/user.interface";
import { UserService } from "./User/user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthenticationService{

    constructor(private readonly userService: UserService,
        private readonly jwtService: JwtService){}

    async hashPassword(password: string): Promise<string>{
        return bcrypt.hash(password, 12);
    };

    // signup
    async signup(createUserDto: NewUserDTO): Promise<UserDetails | string>{

        const {name, email, password} = createUserDto;
     
        const ExistingUser = await this.userService.findByEmail(email);
        if(ExistingUser) 
        throw new HttpException(
            'An account with that email already exists!',
            HttpStatus.CONFLICT,
        );

        const hashedPassword = await this.hashPassword(password);
        const newUser = await this.userService.create(name, email, hashedPassword);
        return this.userService._getUserDetails(newUser);
    };

    async PasswordMatch(password: string, hashedPassword: string): Promise<boolean>{
        return bcrypt.compare(password, hashedPassword);
    }

    async ValidateUser(email:string, password: string): Promise <UserDetails | null | any>{
        const user = await this.userService.findByEmail(email)
        const doesuserexist = !!user;

        if(!doesuserexist) return null;

        const doesPasswordMatch = await this.PasswordMatch(password, user.password);
        if(!doesPasswordMatch)
        throw new HttpException(
            'please provide valid credentials!',
            HttpStatus.UNAUTHORIZED,
          );
        return this.userService._getUserDetails(user);
    };
    // login**

    async login(
        existingUser: ExistingUserDTO,
      ): Promise<{ token: string } | null> {
        const { email, password } = existingUser;
        const user = await this.ValidateUser(email, password);
    
        if (!user)
          throw new HttpException('Credentials invalid!', HttpStatus.UNAUTHORIZED);
    
        const jwt = await this.jwtService.signAsync({ user });
        return { token: jwt };
      }



}