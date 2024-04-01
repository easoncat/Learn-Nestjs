import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, Redirect } from '@nestjs/common';
import { CustomeuserService } from './customeuser.service';
import { CreateCustomeuserDto } from './dto/create-customeuser.dto';
import { UpdateCustomeuserDto } from './dto/update-customeuser.dto';

@Controller('customeuser')
export class CustomeuserController {
  constructor(private readonly customeuserService: CustomeuserService) {}

  // @Post()
  // create(@Body() createCustomeuserDto: CreateCustomeuserDto) {
  //   return this.customeuserService.create(createCustomeuserDto);
  // }
  @Post()
  create(@Body('name') body) {
    console.log(body)
    return {
      code: 200
    };
  }

  @Get()
  findAll(@Query() query) {
    console.log(query)
    return {
      code: 200,
      message: query.name
    }
  }

  @Get(':id')
  @Redirect('https://nestjs.com', 302)
  findOne(@Param('id') params:string) {
    if(+params == 1) {
      return {
        url: 'https://www.bing.com'
      }
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomeuserDto: UpdateCustomeuserDto) {
    return this.customeuserService.update(+id, updateCustomeuserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customeuserService.remove(+id);
  }
}
