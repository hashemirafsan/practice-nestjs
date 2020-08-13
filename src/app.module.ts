import { PacksModule } from './packs/packs.module';
import { PacksController } from './packs/packs.controller';
import { LoggerService } from './utils/logger.service';
import { CatalogModule } from './catalog/catalog.module';
import { CatalogController } from './catalog/catalog.controller';
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import AppConfig from './config/app.config';
import { RedisModule } from 'nestjs-redis';
import { GlobalMiddleware } from './middleware/global.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [AppConfig],
      isGlobal: true
    }),

    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => configService.get<object>('database'),
      inject: [ConfigService]
    }),

    RedisModule.forRootAsync({
      useFactory: (configService: ConfigService) => configService.get<object>('redis'),
      inject: [ConfigService]
    }),

    CatalogModule, 
    PacksModule, 
  ],
  controllers: [
    AppController
  ],
  providers: [
        LoggerService, 
        AppService
  ],
  exports: [
    LoggerService
  ]
})


export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
     consumer.apply(GlobalMiddleware)
     .forRoutes({
        path: 'catalog',
        method: RequestMethod.GET
     })
  }
}
