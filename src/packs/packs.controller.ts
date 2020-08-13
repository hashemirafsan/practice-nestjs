import { Controller, Get, Post, Body } from '@nestjs/common';
import { PacksService } from './packs.service';
import { CreatePackDTO } from './dto/create-pack.dto';
import { validate } from 'class-validator';

@Controller('packs')
export class PacksController {
    
    constructor(private packService: PacksService){}
    
    @Get()
    getPacks() {
        return this.packService.get();
    }

    @Post()
    createPack(@Body() data: CreatePackDTO) {
        validate(data)
        .then(err => {
            this.packService.create(data)
            return {
                message: "CREATED"
            }
        })
    }
}
