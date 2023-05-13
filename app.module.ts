require('dotenv').config();
import { Inject, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttendanceModule } from './Attendance/attendance.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmployeeOnboardingModule } from './onboarding/EmpOnboarding.module';
import { RolesGuard } from './authentication/guards/roles.guards';
import { UserModule } from './authentication/User/user.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  // local development.........
  // imports: [MongooseModule.forRoot('mongodb://127.0.0.1/Paype-Attendance'), AttendanceModule, DashboardModule, EmployeeOnboardingModule, UserModule, AuthModule],

  // Production ***..Database Connection...**
  imports:[ConfigModule.forRoot(),
  MongooseModule.forRootAsync({
    imports:[ConfigModule],
    useFactory:async(configService:ConfigService)=>({
      uri: configService.get<string>('MONGODB_URI'),
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    inject:[ConfigService]
  }),
  AttendanceModule,
  DashboardModule, 
  EmployeeOnboardingModule, 
  UserModule, 
  AuthenticationModule],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_GUARD,
    useClass: RolesGuard,
  }],
})

export class AppModule {}
