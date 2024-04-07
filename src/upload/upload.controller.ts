import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { zip } from 'compressing';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Response } from 'express';
import { join } from 'path';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  // 需要一个 UseInterceptors 中间件，帮助处理文件
  // 配置一下字段名称，
  @Post('album')
  @UseInterceptors(FileInterceptor('file'))
  upload (@UploadedFile() file){
    console.log(file)
    return {
      code: 200
    }
  }

  @Get('export')
  download(@Res() res:Response) {
    const url = join(__dirname, '../images/1712148578674.jpg');
    res.download(url)
  }

  @Get('stream')
  async down(@Res() res: Response) {
    const url = join(__dirname, "../images/1712148578674.jpg");
    const tarStream = new zip.Stream()
    await tarStream.addEntry(url)
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader(
      'Content-Disposition',  
      `attachment; filename=testImage`
    )

    tarStream.pipe(res);
  }
}
