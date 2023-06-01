import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { Company } from './company.schema';
export type ProductDocument = Product & Document;
@Schema({ timestamps: true })
export class Product {
  @Prop()
  id: number;  
  @Prop()
  name: string;
  @Prop()
  color: string;
  @Prop()
  model: string;
  @Prop()
  price: string;
  @Prop()
  companyId: string;
  @Prop({type: Types.ObjectId, ref: 'Company'})
   companys:Types.ObjectId;
}
export const ProductSchema = SchemaFactory.createForClass(Product);