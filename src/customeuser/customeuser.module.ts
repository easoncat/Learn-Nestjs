import { Global, Module } from '@nestjs/common';
import { CustomeuserService } from './customeuser.service';
import { CustomeuserController } from './customeuser.controller';
import { Customeuser } from './entities/customeuser.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Customeuser])],
  controllers: [CustomeuserController],
  providers: [CustomeuserService],
  exports: [CustomeuserService]
})
export class CustomeuserModule {}
