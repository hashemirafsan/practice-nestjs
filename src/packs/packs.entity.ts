import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Catalog } from 'src/catalog/catalog.entity';

@Entity()
export class Packs {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    isActive: boolean;

    @OneToOne(type => Catalog)
    @JoinColumn()
    catalog: Catalog
}