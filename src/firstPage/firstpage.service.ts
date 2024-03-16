import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class FirstPageService {
  constructor(private prisma: PrismaService) {}

  async setBannerDatas(banner: Banner) {
    const { backgroundImgUrl, bannerData } = banner
    const createdBanner = await this.prisma.banner.create({
      data: {
        backgroundImgUrl: backgroundImgUrl,
        bannerData: {
          create: bannerData.map((data) => ({
            title: data.title,
            subTitle: data.subTitle,
            description: data.description,
            link: data.link
          }))
        }
      }
    })
    return 'OK'
  }

  async getBannerDatas() {
    return this.prisma.banner.findMany({
      include: {
        bannerData: true
      }
    })
  }
}
