import { Body, Request, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Roles } from 'src/Role/roles.decorator';
import { Role } from 'src/Role/role.enum';
import { CreateUserDto } from 'src/user/dto/create-user.dto';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}


 
  
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
      //console.log('user details',req);
      return this.authService.login(req.user);
    }
   
    @UseGuards(JwtAuthGuard)
    @Get('profiles')
    getProfile(@Request() req) {
      //console.log('user details',req);
      return this.authService.profiles(req);
    }

    @UseGuards(JwtAuthGuard)
    @Roles(Role.Admin)
    @Post('createbook')
    createBook(@Request() req) {
      //console.log('user details',req);
      return this.authService.Book(req);
    }

    @Post('enmessage')
    async sendMessage(@Body() user) {
      const { message } = user;
      return await this.authService.sendMessage(message);
    }

    @Post('auth/enlogin')
    async enlogin(@Body() createUserDto: CreateUserDto) {
      
      //console.log('user details',req); 
      return this.authService.enlogin(createUserDto);
    }

   
}
