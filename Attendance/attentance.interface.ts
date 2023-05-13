export interface AttendanceRecordInterface {
  employeeId: string;
  checkin: Date;
  checkout: Date;
  duration?: number;
  isActive?: boolean;
  createdAt?: Date;
  
}
