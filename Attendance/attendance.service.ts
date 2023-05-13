import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AttendanceRecordDTO } from 'src/Attendance/dto/create-attendance.dto';
import { AttendanceRecordInterface } from 'src/Attendance/attentance.interface';
import { AttendanceRecord } from 'src/Attendance/attendance.schema';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectModel(AttendanceRecord.name) private attendanceRecordModel: Model<AttendanceRecord>,
  ) {}
  async create(createAttendanceRecordDTO: AttendanceRecordDTO): Promise<AttendanceRecordInterface> {
    const createdAttendanceRecord = new this.attendanceRecordModel(createAttendanceRecordDTO);
    createdAttendanceRecord.duration = this.calculateDuration(createdAttendanceRecord.checkin, createdAttendanceRecord.checkout);
    return createdAttendanceRecord.save();
  }

  async findAll(): Promise<AttendanceRecordInterface[]> {
    return this.attendanceRecordModel.find().exec();
  }

  


  async delete(id: string): Promise<AttendanceRecordInterface> {
    const existingId = await this.attendanceRecordModel.findByIdAndDelete(id).exec();
    return existingId;
  }

  async update(id: string, updateAttendanceDto: AttendanceRecordDTO): Promise<AttendanceRecordInterface> {
    const existingAttendance = await this.attendanceRecordModel.findByIdAndUpdate(id, updateAttendanceDto, { new: true }).exec();
    if(!existingAttendance){
        throw new NotFoundException('Employee #${id} not found!!')
    }
    return existingAttendance;
  }


  async findById(id: string) {
    const getById = await this.attendanceRecordModel.findById(id).exec();
    if(!getById){
      throw new NotFoundException('Employee #${id} not found')
    }
    return getById;
    
  }


// private method to calculate duration between checkout and checkin;

private calculateDuration(checkin: Date, checkout: Date): number {
  if (!checkin || !checkout) {
    return 0;
  }

  const checkinTime = checkin.getTime();
  const checkoutTime = checkout.getTime();
  const durationInMs = checkoutTime - checkinTime;
  return Math.round(durationInMs / (1000 * 60 * 60) * 100) / 100;
}

}
