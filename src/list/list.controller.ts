import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common';
import { ListService } from './list.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';

@Controller('list')
export class ListController {
  constructor(
    private readonly listService: ListService
  ) {}

  @Post()
  create(@Body() createListDto: CreateListDto) {
    return this.listService.create(createListDto);
  }

  @Get()
  findAll(@Query() query: {keyword: string}) {
    return this.listService.findAll(query);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateListDto: UpdateListDto) {
    return this.listService.update(+id, UpdateListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listService.remove(+id);
  }
}
