import { Controller, Get, Post, Body, HttpStatus, Res, Param, Delete, Put, Patch, NotFoundException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { response } from 'express';
import { AttendanceRecordDTO } from 'src/Attendance/dto/create-attendance.dto';
import { AttendanceRecordInterface } from 'src/Attendance/attentance.interface';
import { AttendanceService } from './attendance.service';

@Controller('paype-attendance')
@ApiTags('paype-attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post()
  async create( @Res() response,@Body() createAttendanceDto: AttendanceRecordDTO): Promise<AttendanceRecordInterface> {
    try {
      const createAttendance = await this.attendanceService.create(createAttendanceDto)
      return response.status(HttpStatus.CREATED).json({
        statuscode:"201",
        message:"Attendance submitted successfully!", createAttendance
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Employee not created!',
        error: 'Bad Request'
     });
    }
  }

  @Put('/:id')
  async update(
    @Res() response,
    @Param('id') id: string,
    @Body() updateAttendanceDto: AttendanceRecordDTO,
  ) {
    try {
      const existingAttendance = await this.attendanceService.update(id, updateAttendanceDto);
      return response.status(HttpStatus.OK).json({
      statuscode:'200',
      message:"Attendance Updated Successfully!!", existingAttendance
    })
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }


  @Get('/:id')
  async findById(@Res() response,@Param('id') id: string) {
    try {
      const existingAttendance = await this.attendanceService.findById(id);
      return response.status(HttpStatus.FOUND).json({
        statuscode:'200',
        message:"Employee Attendance Found Successfully!!", existingAttendance
      })
    } catch (error) {
      return response.status(error.status).json(error.response); 
    }
  }

  @Get()
  async findAll(@Res() response) {
    try {
      const getAllAttendance = await this.attendanceService.findAll();
      return response.status(HttpStatus.FOUND).json({
        statuscode:'200',
        message:"All Attendance found successfully!!", getAllAttendance
      })
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    try {
      const existingEmployee = await this.attendanceService.delete(id);
      return response.status(HttpStatus.GONE).json({
        message:"Employee Attendance deleted successfully!!", existingEmployee
      })
    } catch (error) {
      return response.status(error.status).json(error.response);
      
    }
  }

}
