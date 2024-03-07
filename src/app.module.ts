import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { NavListModule } from './nav-list/nav-list.module';

@Module({
  imports: [UsersModule, AuthModule, NavListModule],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
