import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class CreatePackDTO {
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    catalogId: number;

    @IsBoolean()
    isActive: boolean;
    
}