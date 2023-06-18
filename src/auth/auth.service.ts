import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BookService } from 'src/book/book.service';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/schema/user-schema';
import { decryptData, encryptData } from './encrypt';
@Injectable()
export class AuthService {

    
  constructor(
   
    private userService: UserService,
    private jwtService: JwtService
    ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);
    
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: any) {
    console.log('--payload-------',user)
    const payload = { userId: user._doc._id, email: user._doc.email };
   // const payload = { username: user.username, sub: user.userId };
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

  async sendMessage(message: any): Promise<object> {
    const encryptedMessage = encryptData(message);
    const decrytedMessage = decryptData(encryptedMessage);
    return {
      'Encryted Message': encryptedMessage.toString(),
      'Decryted Message': decrytedMessage.toString(),
    };


  }

  Book(req: any) {
    throw new Error('Method not implemented.');
  }
  createBook(req): Promise< any> {
   return req.book
  }


  async enlogin(createUserDto): Promise<any> {
    const user = await this.userService.findOne(createUserDto.email);
    
              console.log('dbdata--->'+user);
              console.log('dbdata password--->'+user.password);
              console.log('postman param--->'+createUserDto.password);
    if (user) {
      const match = await bcrypt.compare(createUserDto.password, user.password);
      console.log('match--->'+match);

      if (match){
        //const { password, ...result } = user;
       // return result;
       return 'Credentials are correct!-----> password right';
      } 
      //return user;
      return 'Invalid Credentials!----->password wrong';
    }
    return 'Invalid Invalid!';
  }
}