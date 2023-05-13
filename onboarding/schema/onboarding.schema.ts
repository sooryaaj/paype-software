import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { State } from "../enum/state.enum";


@Schema()
export class EmployeeOnboarding{
    @Prop({required: true})
    NAME: string;

    @Prop({required: true})
    EMAIL: string;

    @Prop({required: true})
    HIREDATE: string;

    @Prop({required: true})
    JOBTITLE: string;

    @Prop({required: true})
    DEPARTMENT:string;

    @Prop({required:true})
    MANAGER:string;

    @Prop({required:true})
    ANNUALSALARY:string;

    @Prop({required:true, enum: State})
    LOCATION: State;
}
export const OnboardingSchema = SchemaFactory.createForClass(EmployeeOnboarding)