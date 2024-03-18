import { Module } from '@nestjs/common'
import { ImageListController } from './image-list.controller'
import { ImageListService } from './image-list.service'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  controllers: [ImageListController],
  providers: [ImageListService, PrismaService],
  exports: [ImageListService]
})
export class ImageListModule {}
