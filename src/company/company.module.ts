import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { Company } from './entities/company.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './schema/company.schema';
import { Product, ProductSchema } from './schema/product.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema },
    { name: Product.name, schema: ProductSchema }])],
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompanyModule {}
