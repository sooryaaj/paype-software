import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Role } from "src/dashboard/enum/Role.enum";




@Schema({timestamps: true})
export class Dashboard {

  @Prop({required: true,default:Role.EMPLOYEE})
  Type: Role;

  @Prop({ required: true })
  Name: string;

  @Prop({ required: true,  })
  email: string;

  @Prop({ required: true, unique:true })
  empId: string;

  @Prop({ required: true })
  Department: string;

  @Prop({ required: true, length:10})
  PhoneNumber: number;

  @Prop({ required: true })
  PAN: String;

  @Prop({ required: true})
  IFSC_Code: String;

  @Prop({ required: true })
  account_Number: number;

  @Prop({ required: true })
  beneficiary_Name: String;

  @Prop({ required: true })
  privileges: string;

  @Prop()
  lastLogin: Date;

  public lastLoginForRole(role: string){
    if (role === "ADMIN") {
      return this.lastLogin;
    }
    return undefined;
  }
  

  
  

  


}
export const DashboardSchema = SchemaFactory.createForClass(Dashboard)





























// @Prop({ get: (date: Date) => date.toLocaleDateString() })
// lastLoginDate: string;