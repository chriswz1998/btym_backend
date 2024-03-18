import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { FirstPageService } from './firstpage.service'
import { AuthGuard } from '../auth/auth.guard'

@Controller('firstPage')
export class FirstPageController {
  constructor(private firstPageService: FirstPageService) {}

  @UseGuards(AuthGuard) @Post('banner') setBannerData(
    @Body() banners: SetBanner
  ) {
    return this.firstPageService.setBannerDatas(banners)
  }

  @Get('banner') getBannerData() {
    return this.firstPageService.getBannerDatas()
  }
}
