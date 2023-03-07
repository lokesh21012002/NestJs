import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthProvider } from './auth/auth.provider';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [UserModule, AuthModule, BookmarkModule],
  controllers: [AuthController],
  providers: [AuthProvider],
})
export class AppModule {}
