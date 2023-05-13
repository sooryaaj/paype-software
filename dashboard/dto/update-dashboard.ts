import { PartialType } from "@nestjs/mapped-types";
import { DashboardDto } from "./create-dashboard";


export class ExistingdashboardDto extends PartialType(DashboardDto) {

}


// import { IsString, IsNotEmpty, IsEnum, IsEmail, IsPhoneNumber, IsNumber } from 'class-validator';
// import { BadRequestException, InternalServerErrorException, ValidationArguments } from '@nestjs/common';
// import { Role } from './role.enum';

// export class DashboardDto {
//   @IsEnum(Role, { message: 'Type must be a valid Role enum value' })
//   @IsNotEmpty({ message: 'Type must not be empty' })
//   Type: Role;

//   @IsNotEmpty({ message: 'Name must not be empty' })
//   @IsString({ message: 'Name must be a string' })
//   Name: string;

//   @IsNotEmpty({ message: 'Email must not be empty' })
//   @IsEmail({}, { message: 'Email must be a valid email address' })
//   @IsString({ message: 'Email must be a string' })
//   email: string;

//   @IsNotEmpty({ message: 'EmpId must not be empty' })
//   @IsString({ message: 'EmpId must be a string' })
//   empId: string;

//   @IsNotEmpty({ message: 'Department must not be empty' })
//   @IsString({ message: 'Department must be a string' })
//   Department: string;

//   @IsPhoneNumber('IN', {
//     message: (args: ValidationArguments) => {
//       if (args.value.length !== 10) {
//         return `${args.value} MobileNumber must be greater than or equal to 10 digits`;
//       } else {
//         return 'Internal server error';
//       }
//     },
//   })
//   @IsNotEmpty({ message: 'PhoneNumber must not be empty' })
//   PhoneNumber: number;

//   @IsNotEmpty({ message: 'PAN must not be empty' })
//   @IsString({ message: 'PAN must be a string' })
//   PAN: string;

//   @IsNotEmpty({ message: 'IFSC_Code must not be empty' })
//   @IsString({ message: 'IFSC_Code must be a string' })
//   IFSC_Code: string;

//   @IsNotEmpty({ message: 'account_Number must not be empty' })
//   @IsNumber({}, { message: 'account_Number must be a number' })
//   account_Number: number;

//   @IsNotEmpty({ message: 'beneficiary_Name must not be empty' })
//   @IsString({ message: 'beneficiary_Name must be a string' })
//   beneficiary_Name: string;

//   @IsNotEmpty({ message: 'Privileges must not be empty' })
//   @IsString({ message: 'Privileges must be a string' })
//   privileges: string;

//   lastLogin: Date;
// }
