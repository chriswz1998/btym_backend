import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { NavListModule } from './nav-list/nav-list.module'
import { ConfigModule } from '@nestjs/config'
import { UploadModule } from './upload/upload.module'
import { FirstPageModule } from './firstPage/firstpage.module'
import { ImageListModule } from './image-list/image-list.module'
import { CarouselModule } from './carousel/carousel.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'development'
          ? '.env.development'
          : '.env.production',
      isGlobal: true
    }),
    UsersModule,
    AuthModule,
    NavListModule,
    UploadModule,
    FirstPageModule,
    ImageListModule,
    CarouselModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
