import { Module } from '@nestjs/common';
import { WriterService } from './writer.service';
import { WriterController } from './writer.controller';
import { Writer } from './entities/writer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Writer])],
  controllers: [WriterController],
  providers: [WriterService]
})
export class WriterModule {}
