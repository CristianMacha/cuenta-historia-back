import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresqlModule } from './services/postgresql/postgresql.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { CodeUserModule } from './modules/code-user/code-user.module';
import { ComentaryModule } from './modules/comentary/comentary.module';
import { DetailHistoryModule } from './modules/detail-history/detail-history.module';
import { HistoryModule } from './modules/history/history.module';
import { LikeModule } from './modules/like/like.module';
import { TypeUserModule } from './modules/type-user/type-user.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [
    PostgresqlModule,
    AuthModule,
    UserModule,
    CodeUserModule,
    ComentaryModule,
    DetailHistoryModule,
    HistoryModule,
    LikeModule,
    TypeUserModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
