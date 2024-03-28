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

  async deleteImgUrls(id: number) {
    const result = await this.prisma.images.delete({
      where: {
        id
      }
    })
    if (result.id) {
      return { code: 200, message: '删除成功' }
    } else {
      return { code: 401, message: '删除失败' }
    }
  }

  getImageUrls() {
    return this.prisma.images.findMany()
  }
}
