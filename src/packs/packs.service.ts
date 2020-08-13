import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Packs } from './packs.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePackDTO } from './dto/create-pack.dto';

@Injectable()
export class PacksService {

    constructor(
        @InjectRepository(Packs)
        private packsRepository: Repository<Packs>
    ) {}

    get() : Promise<Packs[]> {
        return this.packsRepository.find({ relations: ["catalog"] });
    }

    async create(data: CreatePackDTO) : Promise<void> {
        await this.packsRepository.save(data);
    }

}
