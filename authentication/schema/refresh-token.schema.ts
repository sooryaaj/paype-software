import { Prop, Schema } from "@nestjs/mongoose";
import { User } from "./user.schema";


@Schema({timestamps: true})
export class RefreshToken{
    @Prop({required: true,ref: 'User' })
    userId: User;
    
    @Prop({required: true})
    refreshToken: string;
}