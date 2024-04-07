import { UpdateListDto } from './dto/update-list.dto';
import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { Repository, Like } from 'typeorm';

@Injectable()
export class ListService {
  constructor(@InjectRepository(List) private readonly list:Repository<List>) {}

  create(createListDto: CreateListDto) {
    const data = new List();
    data.name = createListDto.name;
    data.age = createListDto.age;
    data.desc = createListDto.desc;
    return this.list.save(data);
  }

  async findAll(query: {keyword: string}) {
    const res = await this.list.find({
      where: {
        name: Like(`%${query.keyword}%`)
      }
    })
    return res
  }

  update(id: number, UpdateListDto: UpdateListDto) {
    return this.list.update(id, UpdateListDto);
  }

  remove(id: number) {
    return this.list.delete(id);
  }
}
