import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company } from './schema/company.schema';
import { Product } from './schema/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
@Injectable()
export class CompanyService {
  
 

    constructor(
    @InjectModel(Company.name) private readonly companyModel: Model<Company>,
    @InjectModel(Product.name) private readonly productModel: Model<Product>
    ) {}

    async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const createdCompany = await this.companyModel.create(createCompanyDto);
    const companyId = createdCompany.id;
    //console.log('----cid-->',companyId);
    //const createdProduct = await this.productModel.create(createCompanyDto.products,);
    return createdCompany;
  }

    findAll() {
    return this.companyModel.find();
  }

  //group example
     groupCompany() {
     const groupCompany = this.companyModel.aggregate( [
      
     // { $match: { address: "knr2" }},
      // { $group: { _id: "$address", count: { $sum: 1 } }},
      { $group: { _id: "$name", totalDoc: { $push: "$$ROOT" } }}
   ] )
   return groupCompany;
  }


 //count
   async countCompany() :Promise<any> {
   const countCompany  = await this.companyModel.aggregate( [
   { $count: "productsdetailsCount" }
   //{ $count: "companydetailsCount" }
   ])
   return countCompany;
   }
//match

   async matchCompany(): Promise<any> {
   const matchCompany = await this.companyModel.aggregate( [ 
     { $match: { address: "knr" } },
     {$group: {"_id":{name:"$name",products:"$products"}}}
     
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

//project and Sort Documents

     async norSortDoc() : Promise<any>{
     const norSortDoc = await this.companyModel.
      aggregate( [{ $project : { name:{$toLower:"$name"} , _id:0 } },
     { $sort : { name : 1 } }
     ])
     return norSortDoc;
    }

//unwind
    async unwindCompany() : Promise<any> {
      const unwindCompany = await this.companyModel.aggregate( [
          {
          $unwind: "$products" } ,
          {$sort: { "address": 1 }
    }
   ] )
      return unwindCompany;
    }

    //lookup
    async lookupCompany() : Promise<any> {
      const lookupCompany = await this.companyModel.aggregate( [
        {
          $lookup:
       {
         from: "products",
         localField: "model",
         foreignField: "name",
         as: "anything"
            }
       }
     ] )
     return lookupCompany;
    }


    //skip
    async skipCompany(){
      const skipCompany = await this.companyModel.aggregate([
        { $skip : 4 }
    ]);
      return skipCompany;
      }

      //$sortByCount

      async sortByCompany(){
        const sortByCompany = await this.companyModel.aggregate([
          { $sortByCount:  "$name" }
      ]);
        return sortByCompany ;
         }

//sampleCompany
         async sampleCompany(){
          const sampleCompany = await this.companyModel.aggregate(
            [ { $sample: { size: 3 } } ]
         );
        
          return sampleCompany ;
           }
//first&last
           async firstCompany(){
            const firstCompany = await this.companyModel.aggregate([
              {
                $group:{
                  _id:'$name',
                  company_count:{$sum:1},
                  record:{ $first:'$products'}
                 }
               }
            ])
            return firstCompany ;
          }
        }


     
      
  


