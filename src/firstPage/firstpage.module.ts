import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { FirstPageController } from './firstpage.controller'
import { FirstPageService } from './firstpage.service'
import { AuthModule } from '../auth/auth.module'

@Module({
  imports: [AuthModule],
  controllers: [FirstPageController],
  providers: [FirstPageService, PrismaService],
  exports: [FirstPageService]
})
export class FirstPageModule {}
