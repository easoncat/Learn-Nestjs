import { Module } from '@nestjs/common';
import { CustomeuserService } from './customeuser.service';
import { CustomeuserController } from './customeuser.controller';

@Module({
  controllers: [CustomeuserController],
  providers: [CustomeuserService],
})
export class CustomeuserModule {}
