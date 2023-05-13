import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AttendanceRecordSchema } from "src/Attendance/attendance.schema";
// import { AttendanceSchema } from "src/model/attendance.schema";
import { AttendanceController } from "./attendance.controller";
import { AttendanceService } from "./attendance.service";

@Module({
    imports:[MongooseModule.forFeature([{name:'AttendanceRecord', schema:AttendanceRecordSchema}])],
    controllers:[AttendanceController],
    providers:[AttendanceService]
})
export class AttendanceModule{}