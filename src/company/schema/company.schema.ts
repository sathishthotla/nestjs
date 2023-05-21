import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { Product } from './product.schema';
export type CompanyDocument = Company & Document;
@Schema({ timestamps: true })
export class Company {
  @Prop()
  name: string;
  @Prop()
  address: string;
  @Prop()
  info: string;
  @Prop({type: Types.ObjectId, ref: 'Product'})
   products:Types.ObjectId;
 //@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
//product: mongoose.Schema.Types.ObjectId;
//@Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Product.name }])
//products: [Product];
}
export const CompanySchema = SchemaFactory.createForClass(Company);