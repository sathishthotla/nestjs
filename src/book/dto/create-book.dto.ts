import { Writer } from "src/writer/entities/writer.entity";

export class CreateBookDto {
    id: number;
    title: string;
   // Writer: Writer
  writer: Writer;
  
}
    

