import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import {
  CombinedSection,
  Section,
  SubSection,
  SubSectionLink
} from './dto/nav-list.dot'

@Injectable()
export class NavListService {
  constructor(private prisma: PrismaService) {}

  async getNavList(): Promise<CombinedSection[] | undefined> {
    const section: Section[] = await this.prisma.section.findMany()
    const subSection: SubSection[] = await this.prisma.subSection.findMany()
    const subSectionLinks: SubSectionLink[] =
      await this.prisma.subSectionLinks.findMany()

    return section.map((section) => ({
      ...section,
      subSections: subSection
        .filter((subSection) => subSection.section_id === section.section_id)
        .map((subSection) => ({
          ...subSection,
          links: subSectionLinks.filter(
            (link) => link.subSection_id === subSection.subSection_id
          )
        }))
    }))
  }
}
