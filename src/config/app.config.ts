import { Catalog } from '../catalog/catalog.entity';
import { Packs } from 'src/packs/packs.entity';

export default () => ({
    port: process.env.APP_PORT || 3000,
    database: {
        type: "postgres",
        host: 'localhost',
        port: 54324,
        username: "postgres",
        password: "secret",
        database: "nestjs",
        entities: [
            Catalog,
            Packs,
        ],
        synchronize: true,
    },
    redis: {
        host: 'localhost',
        port: 6379,
        password: 'secret',
    }  
})