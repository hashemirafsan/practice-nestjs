import { IsString, IsNumber, IsBoolean, IsNotEmpty } from 'class-validator'

export class CreateCatalogDTO {

    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsBoolean()
    isActive: boolean;
}