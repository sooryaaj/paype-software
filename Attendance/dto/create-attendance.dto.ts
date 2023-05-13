import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsDateString, IsNotEmpty } from "class-validator";

export class AttendanceRecordDTO {
  @IsNotEmpty()
  @ApiProperty()
  employeeId: string;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  @Type(() => Date)
  checkin: Date;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  @Type(() => Date)
  checkout:Date;

  @IsBoolean()
  @ApiProperty()
  isActive?: boolean;

  @IsDateString()
  @ApiProperty()
  @Type(() => Date)
  created_at?: Date;
}











































































































































// import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsDateString } from 'class-validator';

// export class CreateAttendanceDto {
//   @IsNotEmpty()
//   @IsString()
//   employeeId: string;

//   @IsNotEmpty()
//   @IsDateString()
//   checkIn: Date;

//   @IsOptional()
//   checkOut?: Date;

//   @IsOptional()
//   @IsBoolean()
//   isActive?: boolean;

//   @IsOptional()
//   created_at?: Date;

//   duration?: number;
// }

// attendance.dto.ts