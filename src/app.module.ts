import { Module } from '@nestjs/common';
import { DatabeseModule } from './databese/databese.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabeseModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
