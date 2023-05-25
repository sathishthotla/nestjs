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
    //const companyId = createdCompany.id;
    //console.log('----cid-->',companyId);
    //const createdProduct = await this.productModel.create(createCompanyDto.products,);
    return createdCompany;
  }

    findAll() {
    return this.companyModel.find();
  }

  //pipeline example
     pipeLine() {
     const pipeline = this.companyModel.aggregate( [
      // Stage 1: 
      {
         $match: { address: "hyd3" }
      },
      // Stage 2:
      {
         $group: { _id: "$name", count: { $sum: 1 } }
      }
   ] )
   return pipeline;
  }


 //count
   async countCompany() :Promise<any> {
   const countCompany  = await this.companyModel.aggregate( [
   { $count: "CompanydetailsCount" }
   ])
   return countCompany;
   }
//match

   async matchCompany(): Promise<any> {
   const matchCompany = await this.companyModel.
   aggregate( [ { $match: { address: "knr" } },
   ])
   return matchCompany;
   }
// max, min

    async maxminresults(): Promise<any> {
    const maxminresults = await this.companyModel.
      aggregate( [{ $addFields: { 
      maxTime: { $max: "$products.price" },
      minTime: { $min: "$products.price" }
      } }
      ])
     return maxminresults;
     }
// sortsortCompany

    async sortCompany(){
    const sortCompany = await this.companyModel.aggregate( [
    { $sort: { name : -1 } }, // -1 and 1 for sorting
    ])
    return sortCompany;
    }

// limit

    async limitCompany(){
    const limitCompany = await this.companyModel.
     aggregate( [ { $limit: 3 }
     ])
    return limitCompany;
    }

//Normalize and Sort Documents

     async norSortDoc() : Promise<any>{
     const norSortDoc = await this.companyModel.
      aggregate( [{ $project : { name:{$toLower:"$name"} , _id:0 } },
     { $sort : { name : 1 } }
     ])
     return norSortDoc;
    }

//
    async unwindCompany() : Promise<any> {
      const unwindCompany = await this.companyModel.aggregate( [
          {
           $unwind: "$products" } ,
        
          {$sort: { "address": 1 }
        }] )
      return unwindCompany;
    }

}
