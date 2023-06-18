import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { Roles } from 'src/Role/roles.decorator';
import { Role } from 'src/Role/role.enum';
import { RolesGuard } from 'src/Role/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @Roles(Role.Admin,Role.PREMIMUM)
  
  //@UseGuards(JwtGuard,RolesGuard)
  @UseGuards(JwtAuthGuard,RolesGuard)
  create(@Body() createCompanyDto: CreateCompanyDto) {
    console.log('helo---->',createCompanyDto);
    return this.companyService.create(createCompanyDto);
  }

  @Get()
  findAll() {
    return this.companyService.findAll();
  }
  @Get('groupCompany')
  groupCompany() {
    return this.companyService.groupCompany()

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

@Get('lookupCompany')
lookupCompany(){
  return this.companyService.lookupCompany();
}

@Get('skipCompany')
skipCompamy(){
  return this.companyService.skipCompany();
}

@Get('sortByCompany')
sortByCompany(){
  return this.companyService.sortByCompany();
}

@Get('sampleCompany')
sampleCompany(){
  return this.companyService.sampleCompany();
}
@Get('firstCompany')
firstCompany(){
  return this.companyService.firstCompany()
}



}
