// blob-storage.module.ts
import { Module } from '@nestjs/common'
import { FilesAzureService } from './upload.service'
import { UploadController } from './upload.controller'

@Module({
  providers: [FilesAzureService],
  controllers: [UploadController],
  exports: [FilesAzureService]
})
export class UploadModule {}
