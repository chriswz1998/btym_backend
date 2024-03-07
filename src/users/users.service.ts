import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { PrismaService } from '../../prisma/prisma.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10)
    return this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword
      }
    })
  }

  async findUser(email: string): Promise<CreateUserDto | undefined> {
    const user = await this.prisma.user.findUnique({ where: { email } })
    return user
  }

  // 新增验证用户方法
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } })
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user
      return result
    }
    return null
  }
}
