import { Injectable } from '@nestjs/common';
import { CreateCustomeuserDto } from './dto/create-customeuser.dto';
import { UpdateCustomeuserDto } from './dto/update-customeuser.dto';

@Injectable()
export class CustomeuserService {
  create(createCustomeuserDto: CreateCustomeuserDto) {
    return 'This action adds a new customeuser';
  }

  findAll() {
    return `This action returns all customeuser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customeuser`;
  }

  update(id: number, updateCustomeuserDto: UpdateCustomeuserDto) {
    return `This action updates a #${id} customeuser`;
  }

  remove(id: number) {
    return `This action removes a #${id} customeuser`;
  }
}
