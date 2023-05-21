import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Security,SecurityDocument } from './schema/security.schema';
import { Vehicle,VehicleDocument } from './schema/securityvehicle.schema';
import { CreateSecurityDto } from './dto/create-security.dto';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateSecurityDto } from './dto/update-security.dto';
import { Any } from 'typeorm';

@Injectable()
export class SecurityService {
  securityVehicleDetailsModel: any;
  findoneSecurityVehicles(securityId: string) {
    throw new Error('Method not implemented.');
  }
  findOne(id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(Security.name) private securityModel: Model<SecurityDocument>,
    @InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>,
  ) {}
  
 

 async getSecurityVehicles(securityId: string): Promise<Vehicle[]> {
    return this.vehicleModel.find({ security: securityId }).populate('securityId').exec();
  }


   async getoneSecurityVehicles(securityId: string): Promise<Vehicle[]> {
    return this.vehicleModel.find({ securityId: securityId}).populate('securityId');
    
   }

  async createSecurity(createsecurityDto: CreateSecurityDto): Promise<Security> {
    const security = new this.securityModel(createsecurityDto);
    return security.save();
  }

  async createVehicle(securityId: string, createvehicleDto: CreateVehicleDto): Promise<Vehicle> {
    const vehicle = new this.vehicleModel(createvehicleDto);
   // vehicle.security = securityId;
    return vehicle.save();
  }







  async updateSecurity(securityId: string, updatesecurityDto: UpdateSecurityDto): Promise<Security> {
    return this.securityModel.findByIdAndUpdate(securityId, updatesecurityDto, { new: true }).exec();
  }

  async updateVehicle(securityId: string, vehicleId: string, updatevehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return this.vehicleModel.findOneAndUpdate({ _id: vehicleId, security: securityId }, updatevehicleDto, { new: true }).exec();
  }

  async deleteSecurity(securityId: string): Promise<Security> {
    return this.securityModel.findByIdAndRemove(securityId).exec();
  }

  async deleteVehicle(securityId: string, vehicleId: string): Promise<Vehicle> {
    return this.vehicleModel.findOneAndRemove({ _id: vehicleId, security: securityId }).exec();
  }
}



