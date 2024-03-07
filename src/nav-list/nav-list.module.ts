import { Module } from '@nestjs/common'
import { NavListController } from './nav-list.controller'
import { NavListService } from './nav-list.service'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  controllers: [NavListController],
  providers: [NavListService, PrismaService],
  exports: [NavListService]
})
export class NavListModule {}
