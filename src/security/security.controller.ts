import { Controller, Get, Post, Put, Delete, Body, Param, Patch } from '@nestjs/common';
import { SecurityService } from './security.service';
import { CreateSecurityDto } from './dto/create-security.dto';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateSecurityDto } from './dto/update-security.dto';
import { vehicle } from './entities/security.entity';

@Controller('securities')
export class SecurityVehicleController {
  constructor(private readonly securityService: SecurityService) {}


 @Get('/security')
  async getSecurityVehicles(@Param('id') securityId: string) {
    return this.securityService.getSecurityVehicles(securityId);
  }

  @Get(':id')
   async  findoneSecurityVehicles(@Param('id') securityId: string) {
    return this.securityService.getoneSecurityVehicles(securityId);
   }

  @Post()
  async createSecurity(@Body() createsecurityDto: CreateSecurityDto) {
    return this.securityService.createSecurity(createsecurityDto);
  }

  @Post('/vehicles')
  async createVehicle(@Param('id') securityId: string, @Body() createvehicleDto: CreateVehicleDto) {
    return this.securityService.createVehicle(securityId, createvehicleDto);
  }

  @Patch(':id')
  async updateSecurity(@Param('id') securityId: string, @Body() updatesecurityDto: UpdateSecurityDto) {
    return this.securityService.updateSecurity(securityId, updatesecurityDto);
  }

  @Patch(':id/vehicles/:vehicleId')
  async updateVehicle(
    @Param('id') securityId: string,
    @Param('vehicleId') vehicleId: string,
    @Body() updatevehicleDto: CreateVehicleDto,
  ) {
    return this.securityService.updateVehicle(securityId, vehicleId, updatevehicleDto);
  }

  @Delete(':id')
  async deleteSecurity(@Param('id') securityId: string) {
    return this.securityService.deleteSecurity(securityId);
  }

  @Delete(':id/vehicles/:vehicleId')
  async deleteVehicle(
    @Param('id') securityId: string,
    @Param('vehicleId') vehicleId: string,
  ) {
    return this.securityService.deleteVehicle(securityId, vehicleId);
  }
}
function getAllVehicle() {
  throw new Error('Function not implemented.');
}

function GetOne(): (target: SecurityVehicleController, propertyKey: "async") => void {
  throw new Error('Function not implemented.');
}

