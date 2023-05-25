import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    console.log('helo---->',createCompanyDto);
    return this.companyService.create(createCompanyDto);
  }

  @Get()
  findAll() {
    return this.companyService.findAll();
  }
  @Get('sortCompany')
  sortCompany() {
    return this.companyService.sortCompany();
  }

 @Get('matchCompany1')
  matchCompany() {
   return this.companyService.matchCompany();
  }

  @Get('limitCompany')
  limitCompany(){
    return this.companyService.limitCompany();
  }
  
  @Get('countCompany')
  countCompany() {
    return this.companyService.countCompany();
  }


  @Get('norSortDoc')
  norSortDoc(){
    return this.companyService.norSortDoc();
 }

 @Get('maxminresults')
 maxminresults(){
  return this.companyService.maxminresults();
}

@Get('unwindCompany')
unwindCompany(){
  return this.companyService.unwindCompany();
} 

}
