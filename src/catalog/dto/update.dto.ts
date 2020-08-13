import { IsString, IsBoolean, IsNotEmpty, Min, isNotEmpty } from 'class-validator'

export class UpdateCatalogDTO {

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsBoolean()
    @IsNotEmpty()
    isActive: boolean;
}