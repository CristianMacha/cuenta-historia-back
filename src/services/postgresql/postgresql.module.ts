import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'b62q7vfwih9wgzazhm8p-postgresql.services.clever-cloud.com',
      port: 5432,
      username: 'u5n6c97qmdi2vdaznogp',
      password: 'LHWdS61Iu4PRELoqgKrL',
      database: 'b62q7vfwih9wgzazhm8p',
      entities: [__dirname + '/../../modules/**/**.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      synchronize: true,
    }),
  ],
})
export class PostgresqlModule {}
