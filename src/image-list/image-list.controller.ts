import { Body, Controller, Get, Post } from '@nestjs/common'
import { ImageListService } from './image-list.service'

@Controller('imageList')
export class ImageListController {
  constructor(private imageListService: ImageListService) {}
  @Post() async setImgUrl(@Body() url: string) {
    return this.imageListService.setImgUrls(url)
  }

  @Get() async getImageUrl() {
    return this.imageListService.getImageUrls()
  }
}
