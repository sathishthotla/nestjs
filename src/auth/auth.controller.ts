import { Body, Request, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

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
}
