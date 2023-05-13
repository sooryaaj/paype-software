import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DashboardDto } from 'src/dashboard/dto/create-dashboard';
import { ExistingdashboardDto } from 'src/dashboard/dto/update-dashboard';
import { Dashboard } from 'src/dashboard/dashboard.schema';

@Injectable()
export class DashboardService {

    constructor(@InjectModel('dashboard') private dashboardModel: Model<Dashboard>) { }

    async createUser(dashboardDto: DashboardDto){
    
    const newuser = new this.dashboardModel(dashboardDto);
    return await newuser.save();
   
  }

  async update( email: string,updatedto:ExistingdashboardDto): Promise<Dashboard>{
   return await this.dashboardModel.findOneAndUpdate({email}, updatedto, {new: true});

  }

  async findAll(): Promise<Dashboard[]> {
    return await this.dashboardModel.find();
  }

  async getByEmail(email: string): Promise<Dashboard>{
    return await this.dashboardModel.findOne({email}).exec();

  }

  async delete(email: string): Promise<Dashboard> {
    return await this.dashboardModel.findOneAndRemove({email});
}
}
