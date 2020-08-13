import { PacksService } from './packs.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Packs } from './packs.entity';
import { PacksController } from './packs.controller';

@Module({
    imports: [
        ConfigModule,
        TypeOrmModule.forFeature([Packs])
    ],
    controllers: [
        PacksController,
    ],
    providers: [
        PacksService, 
    ],
})
export class PacksModule {}
