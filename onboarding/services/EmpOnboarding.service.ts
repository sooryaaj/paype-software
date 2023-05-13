import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateOnboardingDto } from "src/onboarding/dtos/create-onboarding.dto";
import { IEmployeeOnboarding } from "src/onboarding/Interface/onboarding-interface";
import { EmployeeOnboarding } from "../schema/onboarding.schema";


@Injectable()
export class EmployeeOnboardingService{
    constructor(@InjectModel('EmployeeOnboarding') private readonly employeeRecordModel: Model<EmployeeOnboarding>){}

    async createOnboard(createemployeeonboardingdto:CreateOnboardingDto){
        const Employee = new this.employeeRecordModel(createemployeeonboardingdto);
        return Employee.save();
    };

    async updateOnboard(id: string, updateemployeeonboarddto: CreateOnboardingDto): Promise<IEmployeeOnboarding>{
        return this.employeeRecordModel.findByIdAndUpdate(id, updateemployeeonboarddto, {new: true});
    };

    async getOne(id: string): Promise<IEmployeeOnboarding>{
        return this.employeeRecordModel.findById(id);
    };

    async getAll(): Promise<IEmployeeOnboarding[]>{
        return this.employeeRecordModel.find();
    };

    async DeleteOne(id: string){
        return this.employeeRecordModel.findByIdAndDelete(id);
    }

    

}