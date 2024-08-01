import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  // 这种在 constructor 中直接定义私有变量的方式，其实是Ts的简写形式
  // 等价于
  // constructor(db: DatabaseService) {
  //   this.databaseService = db
  // }
  // constructor(private databaseService: DatabaseService)
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('chartData')
  getChartData(): Object {
    return this.appService.getChartData();
  }

  @Get('login')
  getLogin():string {
    return this.appService.getLogin();
  }
}
