import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, Redirect, Request, Response, Session } from '@nestjs/common';
import { CustomeuserService } from './customeuser.service';
import { UpdateCustomeuserDto } from './dto/update-customeuser.dto';
import * as svgCaptcha from 'svg-captcha'

@Controller('customeuser')
export class CustomeuserController {
  constructor(private readonly customeuserService: CustomeuserService) {}

  @Get('code')
  createCode(@Request() req, @Response() res, @Session() session) {
    const Captcha = svgCaptcha.create({
      size: 4,//生成几个验证码
      fontSize: 50, //文字大小
      width: 100,  //宽度
      height: 34,  //高度
      background: '#cc9966',  //背景颜色
    })
    session.code = Captcha.text;
    res.type('image/svg+xml')
    res.send(Captcha.data)
  }

  @Post('create')
  createUser(@Body() Body, @Session() session) {
    console.log(Body, session.code)

    if(session.code.toLocaleLowerCase() === Body?.code?.toLocaleLowerCase()) {
      return {
        code: 200,
        message: '验证码正确'
      }
    } else {
      return {
        code: 200,
        message: '验证码错误'
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
