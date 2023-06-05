import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaptopsModule } from './laptops/laptops.module';
import { Laptop } from './laptops/entities/laptop.entity';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/entities/employee.entities';
//import { UserModule } from './user/user.module';
//import { User } from './user/entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';
import { MulterModule } from '@nestjs/platform-express';
import { TeacherModule } from './teacher/teacher.module';
import { Security } from './security/entities/security.entity';
import { SecurityModule } from './security/security.module';
import { CompanyModule } from './company/company.module';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';






@Module({
  imports: [
MongooseModule.forRoot('mongodb://127.0.0.1:27017/passportauth'),
MulterModule. 
register({
 // dest:'./uploads/profileImage',
 
}),
UserModule,
AuthModule,


],
providers: [AuthService,JwtService],
  controllers: [AuthController],})
export class AppModule {}








// imports: [
//   MongooseModule.forRoot('mongodb://127.0.0.1:27017/auth'),
//   TeacherModule,SecurityModule,MulterModule. 
//   register({
//    // dest:'./uploads/profileImage',
   
//   }), CompanyModule, AuthModule, UsersModule,
//   // AuthsModule,
//   ],})
//   export class AppModule {}
  