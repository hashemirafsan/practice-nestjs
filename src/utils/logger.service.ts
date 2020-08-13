import { Injectable, Scope } from '@nestjs/common';

@Injectable()
export class LoggerService {
    private arr = {};

    constructor() {
        console.log('nai')
    }

    set(key: string, value : any) {
        this.arr[key] = value;
    }

    get() {
        return this.arr;
    }
}
