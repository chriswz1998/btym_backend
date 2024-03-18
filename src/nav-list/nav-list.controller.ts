import { Body, Controller, Get, Post } from '@nestjs/common'
import { NavListService } from './nav-list.service'

@Controller('NavList')
export class NavListController {
  constructor(private navListService: NavListService) {}

  @Get()
  async getList() {
    return this.navListService.getNavList()
  }
}
