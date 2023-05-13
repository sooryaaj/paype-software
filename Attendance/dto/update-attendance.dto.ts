import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';

export class UpdateAttendanceDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  employeeId: string;

  @IsNotEmpty()
  @ApiProperty()
  checkIn: Date;

  @IsOptional()
  @ApiProperty()
  checkOut?: Date;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  isActive?: boolean;
}
