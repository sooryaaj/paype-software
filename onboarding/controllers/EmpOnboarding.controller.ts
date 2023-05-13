import { Body, 
Controller, 
Delete, 
Get, 
HttpStatus, 
Param, 
Post, 
Put, 
Res, 
UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { response } from "express";
import { Roles } from "src/authentication/decorator/roles.decorator";
import { CreateOnboardingDto } from "src/onboarding/dtos/create-onboarding.dto";
import { JwtGuard } from "src/authentication/guards/jwt.guards";
import { RolesGuard } from "src/authentication/guards/roles.guards";
import { Role } from "src/dashboard/enum/Role.enum";
import { EmployeeOnboardingService } from "../services/EmpOnboarding.service";


@Controller('employeeOnboarding')
@ApiTags('employeeOnboarding')
@ApiBearerAuth()
export class EmployeeOnboardingController{
    constructor(private readonly onboardservice: EmployeeOnboardingService) {}

  
    @Post()
    @Roles(Role.ADMIN)
    @UseGuards(RolesGuard, JwtGuard)
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Res()response, @Body()createonboard: CreateOnboardingDto) {
        try {
        const employee = await this.onboardservice.createOnboard(createonboard);
        return response.status(HttpStatus.CREATED).json({
        message:" Employee Onboarded Successfully!!", employee
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
    @Roles(Role.ADMIN)
    @UseGuards(RolesGuard,JwtGuard)
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async updateUser(
        @Res()response,
        @Param('id') id: string,
        @Body() updateonboarddto: CreateOnboardingDto) {
        try {
        const employee = await this.onboardservice.updateOnboard(id, updateonboarddto);
        return response.status(HttpStatus.ACCEPTED).json({
        message:' Onboard Updated Successfully!!', employee
      })
    }   catch (error) {
        return response.status(error.status).json(error.response);
    }
  }

    @Get()
    @Roles(Role.ADMIN)
    @UseGuards(RolesGuard,JwtGuard)
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async getOnboardAll(@Res()response) {
    try {
    const allEmployee = await this.onboardservice.getAll();
    return response.status(HttpStatus.FOUND).json({
      message:'All EmployeeOnboard Found Successfully!!', allEmployee
    })
    } catch (error) {
    return response.status(error.status).json(error.response);
   }
  
  }

    @Get('/:id')
    @Roles(Role.ADMIN)
    @UseGuards(RolesGuard,JwtGuard)
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async getOnboard(
        @Res()response,
        @Param('id') id: string) {                                                                                                                                    
        try {
        const employeeById = await this.onboardservice.getOne(id);
        return response.status(HttpStatus.FOUND).json({
        message:'  EmployeeOnboard Found successfully'!!,employeeById
      })
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

    @Delete('/:id')
    @Roles(Role.ADMIN)
    @UseGuards(RolesGuard,JwtGuard)
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async deleteonboard(
    @Param('id') id: string) {
    return this.onboardservice.DeleteOne(id);
  
  }
}        

