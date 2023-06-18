import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
//import { Vehicle } from './securityvehicle.schema';
import { vehicle } from '../entities/security.entity';

export type SecurityDocument = Security & Document;

@Schema()
export class Security {
 // @Prop({ required: true})
  //id: Number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  location: string;
  // One-to-Many relationship with Vehicle
  @Prop({ type: Types.ObjectId, ref: 'Vehicle' })
  vehicles: Types.ObjectId;
 // @Prop({ type: mongoose.Schema.Types.ObjectId,ref: 'Vehicle'})
  //VehiclesId: vehicle

}

export const SecuritySchema = SchemaFactory.createForClass(Security);
