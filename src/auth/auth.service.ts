import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  
  constructor(
    private userService: UserService,
    private jwtService: JwtService
    ) {}

  async validateUser(name: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(name);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = { userId: user._doc._id, name: user._doc.name };
    //console.log('--payload-------',payload)
    return {
      access_token: this.jwtService.sign(payload,{ secret: 'secret123123' })
    };
  }
 
  
    async profiles(req): Promise<any> {
    //console.log('------------------------------------------------helpo',req);
   // return await this.userService.findAll(req.user.name);
   return req.user;
  }
}