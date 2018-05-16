export abstract class Entity {
    constructor(public id: string) {}

    mapToJson(): any {
        return JSON.parse(JSON.stringify(this));
    }
}
