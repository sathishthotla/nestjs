import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/Role/roles.guard';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/schema/user-schema';

@Module({
    controllers: [AuthController],
    imports: [UserModule,PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '5s' },
          }),
          //,MongooseModule.forFeature([UserSchema])
        ],
          providers: [
            {
              provide: APP_GUARD,
              useClass: RolesGuard,
            },AuthService,LocalStrategy,JwtStrategy,RolesGuard
          ],
   // providers: [AuthService,LocalStrategy,JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
