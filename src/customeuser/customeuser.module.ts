import { Global, Module } from '@nestjs/common';
import { CustomeuserService } from './customeuser.service';
import { CustomeuserController } from './customeuser.controller';

@Global()
@Module({
  controllers: [CustomeuserController],
  providers: [CustomeuserService],
  exports: [CustomeuserService]
})
export class CustomeuserModule {}
