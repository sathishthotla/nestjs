import { Module } from '@nestjs/common';
import { SecurityService } from './security.service';
import { SecurityVehicleController } from './security.controller';
import { Security, vehicle } from './entities/security.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from './schema/securityvehicle.schema';
import { SecuritySchema } from './schema/security.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Security.name, schema: SecuritySchema },
      { name: Vehicle.name, schema: VehicleSchema },
    ]),
  ],
  controllers: [SecurityVehicleController],
  providers: [SecurityService],
})
export class SecurityModule {}


