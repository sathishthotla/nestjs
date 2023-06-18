import { Module } from '@nestjs/common';
//import { AuthService } from './auth.service';
import { AuthService } from './athus.service';
//import { LocalStrategy } from './local.strategy';
import { LocalStrategy } from './local.strategys';
//import { JwtStrategy } from './jwt.strategy';
import { JwtStrategy } from './jwt.strategys';
//import { UsersModule } from '../users/users.module';

//import { PassportModule } from '@nestjs/passport';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule,
   
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthsModule {}
