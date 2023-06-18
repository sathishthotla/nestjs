//import { Schema } from "mongoose";

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { Role } from "src/Role/role.enum";
@Schema()
export class Book extends Document {
  @Prop()
  title: string;

  @Prop()
  name: string;

  @Prop()
  address: string;
  @Prop()
  roles: Role[];
  user: any;
}

export const BookSchema = SchemaFactory.createForClass(Book);