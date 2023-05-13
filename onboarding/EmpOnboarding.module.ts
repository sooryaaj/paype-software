import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { EmployeeOnboardingController } from "./controllers/EmpOnboarding.controller";
import { OnboardingSchema } from "./schema/onboarding.schema";
import { EmployeeOnboardingService } from "./services/EmpOnboarding.service";

@Module({
    imports:[MongooseModule.forFeature([{name: 'EmployeeOnboarding', schema:OnboardingSchema}])],
    controllers:[EmployeeOnboardingController],
    providers:[EmployeeOnboardingService]
})
export class EmployeeOnboardingModule{}