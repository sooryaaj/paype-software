import { BadRequestException, InternalServerErrorException } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsEnum, IsMobilePhone, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, MaxLength, ValidationArguments } from "class-validator";
import { Role } from "src/dashboard/enum/Role.enum";


export class DashboardDto{
  
  @IsString({ message: 'Type must be a string' })
  @IsNotEmpty({ message: 'Type must not be empty' })
  @IsEnum(Role,{ message: 'Type must be a valid Role enum value' })
  @ApiProperty()
  Type: Role;

  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name must not be empty' })
  @ApiProperty()
  Name: String;

  @IsString({ message: 'Email must be a string' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  @IsNotEmpty({ message: 'Email must not be empty' })
  @ApiProperty()
  email: String;

  @IsString({ message: 'EmpId must be a string' })
  @IsNotEmpty({ message: 'EmpId must not be empty' })
  @ApiProperty()
  empId: string;

  @IsString({ message: 'Department must be a string' })
  @IsNotEmpty({ message: 'Department must not be empty' })
  @ApiProperty()
  Department: String;

  
  @IsNotEmpty({ message: 'PhoneNumber must not be empty' })
  @IsPhoneNumber()
  @ApiProperty()
  PhoneNumber: Number;

  @IsString({ message: 'PAN must be a string' })
  @IsNotEmpty({ message: 'PAN must not be empty' })
  @ApiProperty()
  PAN: String;	

  @IsString({ message: 'IFSC_Code must be a string' })
  @IsNotEmpty({ message: 'IFSC_Code must not be empty' })
  @ApiProperty()
  IFSC_Code	: String;

  @IsNumber({}, { message: 'account_Number must be a number' })
  @IsNotEmpty({ message: 'account_Number must not be empty' })
  @ApiProperty()
  account_Number: number;	

  @IsString({ message: 'beneficiary_Name must be a string' })
  @IsNotEmpty({ message: 'beneficiary_Name must not be empty' })
  @ApiProperty()
  beneficiary_Name:	String;

  @IsString({ message: 'Privileges must be a string' })
  @IsNotEmpty({ message: 'Privileges must not be empty' })
  @ApiProperty()
  privileges: string;

  @ApiProperty()
  lastLogin: Date;

 
   
     


}

// import { BadRequestException} from '@nestjs/common';
// import { Role } from 'src/modules/enum/Role.enum';


// export class DashboardDto {
//   Type: Role;
//   Name: string;
//   email: string;
//   empId: string;
//   Department: string;
//   PhoneNumber: number;
//   PAN: string;
//   IFSC_Code: string;
//   account_Number: number;
//   beneficiary_Name: string;
//   privileges: string;
//   lastLogin: Date;

//   constructor(dto: DashboardDto) {
//     if (!dto.Type || !(dto.Type in Role)) {
//       throw new BadRequestException('Type must be a valid Role enum value');
//     }
//     this.Type = dto.Type;

//     if (!dto.Name || typeof dto.Name !== 'string') {
//       throw new BadRequestException('Name must be a string');
//     }
//     this.Name = dto.Name;

//     if (!dto.email || typeof dto.email !== 'string') {
//       throw new BadRequestException('Email must be a string');
//     }
//     // Use regex to validate email format
//     const emailRegex = /^\S+@\S+\.\S+$/;
//     if (!emailRegex.test(dto.email)) {
//       throw new BadRequestException('Email must be a valid email address');
//     }
//     this.email = dto.email;

//     if (!dto.empId || typeof dto.empId !== 'string') {
//       throw new BadRequestException('EmpId must be a string');
//     }
//     this.empId = dto.empId;

//     if (!dto.Department || typeof dto.Department !== 'string') {
//       throw new BadRequestException('Department must be a string');
//     }
//     this.Department = dto.Department;

//     if (!dto.PhoneNumber || typeof dto.PhoneNumber !== 'number') {
//       throw new BadRequestException('PhoneNumber must be a number');
//     }
//     if (dto.PhoneNumber.toString().length !== 10) {
//       throw new BadRequestException('MobileNumber must be greater than or equal to 10 digits');
//     }
//     this.PhoneNumber = dto.PhoneNumber;

//     if (!dto.PAN || typeof dto.PAN !== 'string') {
//       throw new BadRequestException('PAN must be a string');
//     }
//     this.PAN = dto.PAN;

//     if (!dto.IFSC_Code || typeof dto.IFSC_Code !== 'string') {
//       throw new BadRequestException('IFSC_Code must be a string');
//     }
//     this.IFSC_Code = dto.IFSC_Code;

//     if (!dto.account_Number || typeof dto.account_Number !== 'number') {
//       throw new BadRequestException('account_Number must be a number');
//     }
//     this.account_Number = dto.account_Number;

//     if (!dto.beneficiary_Name || typeof dto.beneficiary_Name !== 'string') {
//       throw new BadRequestException('beneficiary_Name must be a string');
//     }
//     this.beneficiary_Name = dto.beneficiary_Name;

//     if (!dto.privileges || typeof dto.privileges !== 'string') {
//       throw new BadRequestException('Privileges must be a string');
//     }
//     this.privileges = dto.privileges;

//     // lastLogin does not need validation
//     this.lastLogin = dto.lastLogin;
//   }
// }
