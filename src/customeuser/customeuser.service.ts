import { Injectable } from '@nestjs/common';
import { CreateCustomeuserDto } from './dto/create-customeuser.dto';
import { UpdateCustomeuserDto } from './dto/update-customeuser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customeuser } from './entities/customeuser.entity'
import { Repository, Like } from 'typeorm';

@Injectable()
export class CustomeuserService {
  constructor(@InjectRepository(Customeuser) private readonly customeuser:Repository<Customeuser>) {}

  create(createCustomeuserDto: CreateCustomeuserDto) {
    const data = new Customeuser();
    data.name = createCustomeuserDto.name;
    data.age = createCustomeuserDto.age;
    data.addr = createCustomeuserDto.addr;
    data.birth = createCustomeuserDto.birth;
    data.gender = createCustomeuserDto.gender;
    return this.customeuser.save(data);
  }

  async findAll(query: {keyword: string}) {
    const res = await this.customeuser.find({
      where: {
        name: Like(`%${query.keyword}%`)
      }
    })
    return res;
  }

  findOne(id: number) {
    return `This action returns a #${id} customeuser`;
  }

  update(id: number, updateCustomeuserDto: UpdateCustomeuserDto) {
    return this.customeuser.update(id, updateCustomeuserDto);
  }

  remove(id: number) {
    return this.customeuser.delete(id);
  }
}
