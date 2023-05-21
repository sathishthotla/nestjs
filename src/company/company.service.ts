import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Company } from './schema/company.schema';
import { Product } from './schema/product.schema';

@Injectable()
export class CompanyService {

  constructor(
    @InjectModel(Company.name) private readonly companyModel: Model<Company>,
    @InjectModel(Product.name) private readonly productModel: Model<Product>
    ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const createdCompany = await this.companyModel.create(createCompanyDto);
  
    const companyId = createdCompany.id;
    console.log('----cid-->',companyId);
    const createdProduct = await this.productModel.create(createCompanyDto.products,);
    return createdCompany;
  }

  findAll() {
    return this.companyModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }


async getProductCount(id: string): Promise<number> {
    const ptroctlist = await this.companyModel.findOne({ _id: id }).exec();
    console.log('-------ptroctlist.products----------->',ptroctlist.products);
    //checking product count
    let count = Object.keys(ptroctlist.products).length;
    console.log('--------Count---------->',count);
    return count;
}

async getProductminprice(id: string): Promise<number> {
  const ptroctlist = await this.companyModel.findOne({ _id: id }).exec();
  console.log('-------ptroctlist.products----------->',ptroctlist.products);
  //checking min
  
  let arr = Object.keys( ptroctlist.products).map(function (price) { return ptroctlist.products[price]});
  let min = Math.min.apply(Math, arr.map(a => a.price));
  console.log('--------min-----value----->',min);
  return min;
}
async getProductmaxprice(id: string): Promise<number> {
  const ptroctlist = await this.companyModel.findOne({ _id: id }).exec();
  console.log('-------ptroctlist.products----------->',ptroctlist.products);
  //checking min
  
  let arr = Object.keys( ptroctlist.products).map(function (price) { return ptroctlist.products[price]});
  let max = Math.max.apply(Math, arr.map(a => a.price));
  console.log('--------max-----value----->',max);
  return max;
}

async getProductsort(id: string): Promise<number> {
  const ptroctlist = await this.companyModel.findOne({ _id: id }).exec();
  console.log('-------ptroctlist.products----------->',ptroctlist.products);
  //checking sort
  let max;
  return max;
}
//sort, unwind, match

}
