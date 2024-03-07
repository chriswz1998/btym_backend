import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { CreateUserDto } from '../users/dto/create-user.dto'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(
    email: string,
    pass: string
  ): Promise<{
    result: Omit<CreateUserDto, 'password'>
    access_token: string
  }> {
    if (!email || !pass) {
      throw new UnauthorizedException('Email and password are required.')
    }
    const user = await this.usersService.findUser(email)
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user
      return {
        result,
        access_token: await this.jwtService.signAsync(result)
      }
    } else {
      throw new UnauthorizedException('User not found.')
    }
  }
}
