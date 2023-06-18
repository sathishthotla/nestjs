import { Controller,Request,Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';

import { AuthService } from 'src/auth/auth.service';
import { CreateAthusDto } from './dto/create-athus.dto';
import { UpdateAthusDto } from './dto/update-athus.dto';

import { LocalAuthGuard } from './local-auths.guard';
import { JwtAuthGuard } from './jwt-auths.guard';
import { Roles } from 'src/Role/roles.decorator';
import { Role } from 'src/Role/role.enum';

import { RolesGuard } from './roles.guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  // @UseGuards(LocalAuthGuard)
  // @Post('login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('admin')
  onlyAdmin(@Request() req) {
    return req.user;
  }

  @Roles(Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('user')
  onlyUser(@Request() req) {
    return req.user;
  }
  // checking encrypt and decrypt
  
}

