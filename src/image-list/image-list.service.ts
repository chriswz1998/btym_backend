import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class ImageListService {
  constructor(private prisma: PrismaService) {}

  setImgUrls(url: string) {
    return this.prisma.images.create({
      data: {
        url
      }
    })
  }

  getImageUrls() {
    return this.prisma.images.findMany()
  }
}
