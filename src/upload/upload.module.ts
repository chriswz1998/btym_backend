import { Module } from '@nestjs/common'
import { FilesAzureService } from './upload.service'
import { UploadController } from './upload.controller'
import { ImageListModule } from '../image-list/image-list.module'

@Module({
  imports: [ImageListModule],
  providers: [FilesAzureService],
  controllers: [UploadController],
  exports: [FilesAzureService]
})
export class UploadModule {}
