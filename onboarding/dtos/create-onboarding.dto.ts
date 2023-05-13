import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { State } from "../enum/state.enum";

export class CreateOnboardingDto{

    @IsString({ message: 'NAME must be a string' })
    @IsNotEmpty({ message: 'NAME must not be empty' })
    @ApiProperty()
    NAME: string;

    @IsEmail({}, { message: 'EMAIL must be a valid email address' })
    @IsNotEmpty({ message: 'EMAIL must not be empty' })
    @ApiProperty()
    EMAIL: string;

    @IsNotEmpty({ message: 'HIREDATE must not be empty' })
    @IsString({ message: 'HIREDATE must be a string' })
    @ApiProperty()
    HIREDATE:string;

    @IsString({ message: 'JOBTITLE must be a string' })
    @IsNotEmpty({ message: 'JOBTITLE must not be empty' })
    @ApiProperty()
    JOBTITLE: string;

    @IsString({ message: 'DEPARTMENT must be a string' })
    @IsNotEmpty({ message: 'DEPARTMENT must not be empty' })
    @ApiProperty()
    DEPARTMENT:string;

    @IsString({ message: 'MANAGER must be a string' })
    @IsNotEmpty({ message: 'MANAGER must not be empty' })
    @ApiProperty()
    MANAGER:string;

    @IsNotEmpty({ message: 'ANNUALSALARY must not be empty' })
    @IsString({ message: 'ANNUALSALARY must be a string' })
    @ApiProperty()
    ANNUALSALARY: string;

    @IsString({ message: 'LOCATION must be a string' })
    @ApiProperty()
    @IsEnum(State)
    LOCATION:State;
}