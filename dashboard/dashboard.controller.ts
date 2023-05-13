import { Body, 
Controller, 
Delete, 
Get, 
HttpStatus, 
Param, 
Patch, 
Post, 
Put, 
Res, 
UseGuards, } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { response } from 'express';
import { Roles } from 'src/authentication/decorator/roles.decorator';
import { DashboardDto } from 'src/dashboard/dto/create-dashboard';
import { ExistingdashboardDto } from 'src/dashboard/dto/update-dashboard';
import { RolesGuard } from 'src/authentication/guards/roles.guards';
import { Role } from 'src/dashboard/enum/Role.enum';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
@ApiTags('dashboard')
export class DashboardController {

  constructor(private readonly dashboardservice: DashboardService) { }

  
  @Post()
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  async create(@Res() response,@Body() createdto: DashboardDto) {
    try {
      const employee = await this.dashboardservice.createUser(createdto);
      return response.status(HttpStatus.CREATED).json({
        message:"Created Successfully!!", employee
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Employee not created!',
        error: 'Bad Request'
     });
      
    }

  }

  @Put('/:email')
  async updateUser(
    @Res() response,
    @Param('email') email: string,
    @Body() updatedto: ExistingdashboardDto) {
    try {
      const employee = await this.dashboardservice.update(email, updatedto);
      return response.status(HttpStatus.ACCEPTED).json({
        message:'Updated Successfully!!', employee
      })
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get()
  async getUserAll(@Res() response) {
   try {
    const allEmployee = await this.dashboardservice.findAll();
    return response.status(HttpStatus.FOUND).json({
      message:'Found Successfully!!', allEmployee
    })
   } catch (error) {
    return response.status(error.status).json(error.response);
   }
  
  }

  @Get('/:email')
  async getUser(
    @Res() response,
    @Param('email') email: string) {                                                                                                                                    
    try {
      const employeeById = await this.dashboardservice.getByEmail(email);
      return response.status(HttpStatus.FOUND).json({
        message:' Found successfully'!!,employeeById
      })
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Delete('/:email')
  async deleteUser(
    @Res()
    @Param('email') email: string) {
    return this.dashboardservice.delete(email);
  
  }
}
