import { Book } from "src/book/entities/book.entity";
import { Writer } from "../entities/writer.entity";

export class CreateWriterDto {
    id: number;
    name: string;
    book: Book; 
   // id: number[];
    //writer: Writer;
}
