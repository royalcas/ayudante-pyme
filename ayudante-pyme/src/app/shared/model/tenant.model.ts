import { Entity } from './entity.model';

export class Tenant extends Entity {

    constructor(
        id: string,
        name: string,
        description: string,
        code: string
    ) {
        super(id);
    }
}
