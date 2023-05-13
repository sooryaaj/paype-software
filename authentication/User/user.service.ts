import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ResetPasswordDto } from "../dto/resetPasswordDto";
import { UpdateUserDTO } from "../dto/update-user.dto";
import { ForgotPassword } from "../schema/forget-password.schema";
import { UserDocument } from "../schema/user.schema";
import { UserDetails } from "./user.interface";



@Injectable()
export class UserService{
    
    deleteStudent(id: string) {
      throw new Error('Method not implemented.');
    }
    constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>,
    @InjectModel('ForgotPassword') private readonly forgotPasswordModel: Model<ForgotPassword>,
    ){}

    _getUserDetails(user: UserDocument): UserDetails{
        return {
            id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            
        };
    }

    async findAll(){
        return this.userModel.find();
    };

    
    async findByEmail(email: string): Promise<UserDocument>{
        return this.userModel.findOne({email}).exec();
    };

    
    async findById(id: string): Promise<UserDetails>{
        const user = await this.userModel.findById(id).exec();
        if(!user) return null;
        return this._getUserDetails(user);        
    }

    
    async create(name:string, email:string, hashedPassword:string,): Promise<UserDocument>{
        const newUser = new this.userModel({
            name,
            email,
            password: hashedPassword,
        })
        return newUser.save();
    };
    async Delete(id: string): Promise<UserDetails | any>{
        const deleteUser = await this.userModel.findByIdAndDelete(id);
        if (!deleteUser) {
            throw new NotFoundException(`User #${id} not found`);
          }
          return deleteUser;
       }
       async deleteAll(): Promise<UserDetails | any>{
        const deleteUser = await this.userModel.deleteMany();
        
          return deleteUser;
       }

        async Update( id: string,updateUserDto:UpdateUserDTO): Promise<UserDetails | any>{
        const existinguser = await  this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true});
        if(!existinguser){
          throw new NotFoundException("existingUser not found!!");
        }
        return existinguser;
        
      }

    //   Reset Password........

    // async resetPassword( resetpassworddto:ResetPasswordDto){
    //     const forgotPassword = await this.findForgotPasswordByEmail(resetpassworddto);
    //     // await this.setForgotPasswordFinalUsed(forgotPassword);
    //     await this.resetUserPassword(resetpassworddto);
    //     return {
    //         email: resetpassworddto,
    //         message:'Password changed successfully', forgotPassword
    //     }
    // }

    


    // private async resetUserPassword(resetuserpassword: ResetPasswordDto) {
    //     const user = await this.userModel.findOne({
    //         email:resetuserpassword.email,
    //         password: resetuserpassword.password
    //     })
    //     user.password = resetuserpassword.password;
    //     await user.save();
    // }

    // private async findForgotPasswordByEmail(resetpassworddto: ResetPasswordDto){
    //     const forgotPassord = await this.forgotPasswordModel.findOne({
    //         email:resetpassworddto.email
    //     });
    //     if(!forgotPassord){
    //         throw new BadRequestException('Bad Request')
    //     }
    //     return forgotPassord;
    // };
    


   

}   
