import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { CarouselDto } from './dto/carousel.dto'

@Injectable()
export class CarouselService {
  constructor(private prisma: PrismaService) {}

  async setCarousels(res: CarouselDto[]) {
    const date = await this.prisma.carousel.createMany({
      data: res.map((item) => ({
        url: item.url,
        link: item.link,
        text: item.text
      }))
    })
    console.log(date)
    return date
  }

  async getCarousels() {
    const data = this.prisma.carousel.findMany()
    return data
  }

  async putCarousels(res: CarouselDto) {
    console.log(res)
    const data = await this.prisma.carousel.update({
      where: {
        id: res.id
      },
      data: {
        url: res.url,
        text: res.text,
        link: res.link
      }
    })
    console.log(data)
    return data
  }
}
