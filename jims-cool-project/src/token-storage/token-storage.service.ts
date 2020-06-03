import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenStorageService {

    public readonly foobar = 5

    constructor() {
        console.log('constructing token storage service!')

        console.log('foobar is: ', this.foobar)

        this.foobar += 1
    }

    foo() {
        console.log('doing foo')
    }

}
