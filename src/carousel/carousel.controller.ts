import { Body, Controller, Get, Post, Put } from '@nestjs/common'
import { CarouselService } from './carousel.service'
import { CarouselDto } from './dto/carousel.dto'

@Controller('carousel')
export class CarouselController {
  constructor(private carouselService: CarouselService) {}

  @Post()
  async setCarousel(@Body() res: CarouselDto[]) {
    return this.carouselService.setCarousels(res)
  }

  @Get() getCarousel() {
    return this.carouselService.getCarousels()
  }
  @Put() putCarousel(@Body() res: CarouselDto) {
    return this.carouselService.putCarousels(res)
  }
}
