import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class ForgotPassword {
    @Prop({required: true})
    email: string;
}
export const ForgotPasswordSchema = SchemaFactory.createForClass(ForgotPassword);