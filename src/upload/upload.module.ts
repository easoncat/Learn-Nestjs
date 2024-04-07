import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

// 配置目录存放位置
@Module({
  imports:[MulterModule.register({
    storage: diskStorage({
      destination: join(__dirname, "../images"),
      filename: (_, file, callback) => {
        const fileName = `${new Date().getTime() + extname(file.originalname)}`
        return callback(null, fileName)
      }
    })
  })],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
