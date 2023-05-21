import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { Security } from './security.schema';

export type VehicleDocument = Vehicle & Document;

@Schema()
export class Vehicle {

  @Prop({required: true})
  name: string
  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  colour: string;

 // @Prop({ required: true}) 
  //securityId: string;
  
  @Prop({ required: true})
  price: string;

   // Many-to-One relationship with Security
 @Prop({ type: Types.ObjectId, ref: 'Security' })
  securityId: Types.ObjectId;

 // @Prop({ type: mongoose.Schema.Types.ObjectId,ref: 'Security'})
  //security: Security
 

}
export const VehicleSchema = SchemaFactory.createForClass(Vehicle);




