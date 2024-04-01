import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomeuserModule } from './customeuser/customeuser.module';

@Module({
  imports: [CustomeuserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
