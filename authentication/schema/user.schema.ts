import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";
import { Role } from "src/dashboard/enum/Role.enum";

export type UserDocument = User & Document;

@Schema()
export class User{
    id(id: any, token: any, expirationDate: any) {
        throw new Error("Method not implemented.");
    }
    @Prop({required: true})
    name: string;

    @Prop({required:true, unique: true})
    email: string;

    @Prop({required: true})
    password: string;

    @Prop({required: true, default:Role.EMPLOYEE})
    roles: Role[];

    @Prop({ default: new Date() })
    date: Date;

}
export const UserSchema = SchemaFactory.createForClass(User);






























// import { Schema, model } from 'mongoose';

// const userSchema = new Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   dates: [{
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//     updatedAt: {
//       type: Date,
//       default: Date.now,
//     },
//   }],
// }, {
//   timestamps: false,
// });

// userSchema.pre('save', function(next) {
//   const now = new Date();
//   this.dates.push({ createdAt: now, updatedAt: now });
//   next();
// });

// export const User = model('User', userSchema);

// import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

// @Schema()
// export class User {
//   @Prop({ required: true })
//   username: string;

//   @Prop({ required: true })
//   password: string;

//   @Prop({ default: [] })
//   dates: [{
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//     updatedAt: {
//       type: Date,
//       default: Date.now,
//     },
//   }];
// }

// export const UserSchema = SchemaFactory.createForClass(User);

// UserSchema.pre('save', function(next) {
//   const now = new Date();
//   this.dates.push({ createdAt: now, updatedAt: now });
//   next();
// });
