import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class FirstPageService {
  constructor(private prisma: PrismaService) {}

  async setBannerDatas(banners: SetBanner) {
    try {
      const { backgroundImgUrl, bannerData } = banners
      if (backgroundImgUrl) {
        await this.prisma.banner.update({
          where: { id: 1 },
          data: {
            backgroundImgUrl
          }
        })
      }
      await this.prisma.bannerData.update({
        where: { id: parseInt(bannerData.id, 10) },
        data: {
          title: bannerData.title,
          subTitle: bannerData.subTitle,
          description: bannerData.description,
          link: bannerData.link
        }
      })
      return { message: 'update success.', code: 200 }
    } catch (e) {
      return { message: 'sql error' }
    }
  }

  async getBannerDatas() {
    return this.prisma.banner.findMany({
      include: {
        bannerData: true
      }
    })
  }
}
