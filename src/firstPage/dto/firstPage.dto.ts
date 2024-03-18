interface Banner {
  backgroundImgUrl: string
  bannerData: BannerData[]
}

interface BannerData {
  id: string
  title: string
  subTitle: string
  description: string
  link: string
}

interface SetBanner {
  backgroundImgUrl: string
  bannerData: BannerData
}
