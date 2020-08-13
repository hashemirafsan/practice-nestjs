import { CatalogService } from './catalog.service';
import { Module } from '@nestjs/common';
import { CatalogController } from './catalog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catalog } from './catalog.entity';
import { ConfigModule } from '@nestjs/config';
import { LoggerService } from 'src/utils/logger.service';

@Module({
    imports: [
        ConfigModule,
        TypeOrmModule.forFeature([Catalog])
    ],
    controllers: [
        CatalogController
    ],
    providers: [
        CatalogService,
        LoggerService
    ],
    exports: [
        LoggerService
    ]
})
export class CatalogModule {}
