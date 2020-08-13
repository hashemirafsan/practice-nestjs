import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Catalog } from './catalog.entity';
import { Repository } from 'typeorm';
import { CreateCatalogDTO } from './dto/create.dto';
import { UpdateCatalogDTO } from './dto/update.dto';
import { LoggerService } from 'src/utils/logger.service';

 
@Injectable()
export class CatalogService {

    constructor(
        @InjectRepository(Catalog)
        private catalogRepository: Repository<Catalog>,
        private logger: LoggerService
    ) {}
    
     findAll(): Promise<Catalog[]> {
        this.logger.set('cat_serv', 1);
        return this.catalogRepository.find();
     }

     findOne(id: number) : Promise<Catalog> {
        return this.catalogRepository.findOne(id);
     }

     async create(data: CreateCatalogDTO) : Promise<void> {
        const catalog = this.catalogRepository.create(data);
        await this.catalogRepository.save(catalog);
     }

     async update(catalogId: number, data: UpdateCatalogDTO) : Promise<void> {
        await this.catalogRepository.save({
           id: catalogId,
           name: data.name,
           isActive: data.isActive
        });
     }

     async delete(catalogId: number): Promise<void> {
        await this.catalogRepository.delete(catalogId);
     }

}
