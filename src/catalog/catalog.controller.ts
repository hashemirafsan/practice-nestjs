import { Controller, Get, Post, Put, Param, ParseIntPipe, Body, Delete } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CreateCatalogDTO } from './dto/create.dto';
import { UpdateCatalogDTO } from './dto/update.dto';
import { validate } from 'class-validator';
import { LoggerService } from 'src/utils/logger.service';


@Controller('catalog')
export class CatalogController {

    constructor(private catalogService: CatalogService, private logger: LoggerService) {}

    @Get()
    getCatalogs() {
        this.logger.set('cat_cont', 1)
        let d = this.catalogService.findAll();
        console.log(this.logger.get())
        return d;
    }

    @Get(':id')
    getSingleCatalog(@Param('id', ParseIntPipe) id: number) {
        return this.catalogService.findOne(id);
    }

    @Post()
    storeCatalog(@Body() createCatalogDTO: CreateCatalogDTO) {
        validate(createCatalogDTO)
        .then(err => {
            this.catalogService.create(createCatalogDTO);
            return {
                message: "Successfully created"
            };
        })
    }

    @Put(':id')
    updateCatalog(@Param('id', ParseIntPipe) id: number, @Body() updateCatalogDTO: UpdateCatalogDTO) {
        validate(updateCatalogDTO)
        .then(err => {
            this.catalogService.update(id, updateCatalogDTO);
            return {
                message: "Succesfully updated"
            };
        })
    }

    @Delete(':id')
    deleteCatalog(@Param('id', ParseIntPipe) id: number) {
        this.catalogService.delete(id);
        return {
            message: "Successfully deleted"
        };
    }

}
