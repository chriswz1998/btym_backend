// upload.controller.ts
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  HttpCode
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { FilesAzureService } from './upload.service'

@Controller('upload')
export class UploadController {
  constructor(private readonly blobStorageService: FilesAzureService) {}

  @Post()
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<string> {
    return await this.blobStorageService.uploadFile(file)
  }
}
