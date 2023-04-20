import { Module } from '@nestjs/common';
import { LaptopsService } from './laptops.service';
import { LaptopsController } from './laptops.controller';
import { Laptop } from './entities/laptop.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Laptop])],
  controllers: [LaptopsController],
  providers: [LaptopsService]
})
export class LaptopsModule {}
