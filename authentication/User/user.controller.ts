import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserDetails } from './user.interface';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDTO } from '../dto/update-user.dto';
import { ResetPasswordDto } from '../dto/resetPasswordDto';



@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserDetails | null> {
    return this.userService.findById(id);
  }
  @Get()
     getUserAll() {
       return this.userService.findAll();
  };
//   @Post('forgot-password')
//   async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
//     return await this.userService.resetPassword(resetPasswordDto);
// }

  @Delete(':id')
  async deleteById(@Param('id')id: string){
    const deleteuser = await this.userService.Delete(id);
    return deleteuser;
  }
  @Delete()
  async deleteAll(){
    const deleteuser = await this.userService.deleteAll();
    return deleteuser;
  }
  @Put(':id')
  async updateUser(@Param('id') id: string,
  @Body() updateUserDto: UpdateUserDTO) {
  const existingUser = await this.userService.Update(id, updateUserDto);
  return existingUser;

}

  
}