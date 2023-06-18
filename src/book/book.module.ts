import { Module, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
