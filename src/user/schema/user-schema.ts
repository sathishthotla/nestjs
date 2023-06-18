
//import { Schema, } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Role } from "src/Role/role.enum";
import { Book, BookSchema } from "src/book/schema/book.schema";
import { OneToMany } from "typeorm";



export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop()
  userId: string;
  @Prop()
 name: string;

 @Prop()
 email: string;
 //username: string;
  @Prop()
  password: string;
  // @Prop()
  // roles: Role;
 

  //  @OneToMany(() => BookSchema, (bookSchema) => bookSchema.author)
  //  books: BookSchema[];
  // @OneToMany(() => Book, book => book.user, { cascade: true,})
  // books: Book[]


}

export const UserSchema = SchemaFactory.createForClass(User);