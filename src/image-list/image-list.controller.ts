import { Body, Controller, Delete, Get, Post } from '@nestjs/common'
import { ImageListService } from './image-list.service'

@Controller('imageList')
export class ImageListController {
  constructor(private imageListService: ImageListService) {}

  @Post()
  async setImgUrl(@Body() url: string) {
    return this.imageListService.setImgUrls(url)
  }

  @Delete()
  async deleteImgUrl(@Body() params: { id: number }) {
    const { id } = params
    return this.imageListService.deleteImgUrls(id)
  }

  @Get()
  async getImageUrl() {
    return this.imageListService.getImageUrls()
  }
}
