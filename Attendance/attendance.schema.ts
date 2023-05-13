import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AttendanceRecord extends Document {
  @Prop({ required: true })
  employeeId: string;

  @Prop({ required: true , default: Date.now})
  checkin: Date;

  @Prop()
  checkout: Date;

  @Prop()
  duration: number; 

  @Prop({default: true})
  isActive: boolean;

  @Prop({default: Date.now})
  createdAt: Date

}

export const AttendanceRecordSchema = SchemaFactory.createForClass(AttendanceRecord);





















































































